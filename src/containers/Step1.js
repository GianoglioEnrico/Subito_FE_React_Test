import { useEffect, useState } from "react";
import Select from "../components/Select";
import AttendeeForm from "../components/AttendeeForm";

function Step1(props) {
  const { setStep2IsDisabled, reset, setReset } = props;
  const [inputsToShow, setInputsToShow] = useState("0");
  const [doneIcon, setDoneIcon] = useState(false);
  const [inputValues, setInputValues] = useState([]);
  const [step1Height, setStep1Height] = useState("120px");
  const select = document.querySelector("select");

  // Select gets clicked
  const handleSelect = (event) => {
    setReset(false);
    setInputsToShow(event.target.value);
    setDoneIcon(false);
    setStep1Height("120px");
    setStep2IsDisabled(true);
    // If the selected element is not the default value ("0")
    if (event.target.value !== "0") {
      setStep1Height(120 + 60 * event.target.value + "px");
    }

    // if the selected element is the default value ("0")
    else {
      inputValues.forEach((inputValue) => (inputValue.value = ""));
      setInputValues([]);
      setStep1Height("120px");
    }
  };

  // User type in inputs
  const handleInputChange = (e) => {
    if (inputValues.length === 0) {
      inputValues.push(e.target);
    } else {
      !inputValues.includes(e.target) && inputValues.push(e.target);
    }

    const filledInputs = inputValues.filter(
      (inputValue) => inputValue.value !== ""
    );
    // If all visible input fields are filled show green check
    if (filledInputs.length === Number(inputsToShow)) {
      setDoneIcon(true);
      setStep2IsDisabled(false);
      setStep1Height(parseInt(step1Height) + 60 + "px");
    }
    // if not all visible attendee inputs are filled
    else {
      setDoneIcon(false);
      setStep2IsDisabled(true);
      setStep1Height(120 + inputsToShow * 60 + "px");
    }
  };
  useEffect(() => {
    if (reset) {
      setDoneIcon(false);
      setInputsToShow("0");
      setStep1Height("120px");
      inputValues.forEach((inputValue) => (inputValue.value = ""));
      select.value = "0";
    }
  }, [reset, inputValues, select]);

  return (
    <fieldset id="step_1">
      <legend>Step 1</legend>
      <label htmlFor="num_attendees">How many people will be attending?</label>
      <Select handleSelect={handleSelect} reset={reset} />
      <br />
      <AttendeeForm
        inputsToShow={inputsToShow}
        handleInputChange={handleInputChange}
        doneIcon={doneIcon}
        step1Height={step1Height}
      />
    </fieldset>
  );
}

export default Step1;
