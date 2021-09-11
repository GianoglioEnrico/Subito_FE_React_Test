import { useEffect, useState } from "react";

function Step3(props) {
  const { step3IsDisabled, reset } = props;
  const [isCheckBoxChecked, setIsCheckBoxChecked] = useState(true);
  const step3CheckBox = document.getElementById("rock");
  const handleCheckBox = (event) => {
    if (event.target.checked) {
      setIsCheckBoxChecked(false);
    } else {
      setIsCheckBoxChecked(true);
    }
  };
  useEffect(() => {
    if (reset) {
      step3CheckBox.checked = false;
    }
  }, [reset, step3CheckBox]);
  return (
    <fieldset
      id="step_3"
      disabled={step3IsDisabled}
      style={{ opacity: step3IsDisabled ? 0.6 : 1 }}
    >
      <legend>Step 3</legend>
      <div>
        <label htmlFor="rock"> Are you ready to rock? </label>
        <input type="checkbox" id="rock" onChange={handleCheckBox} />
      </div>
      <input
        type="submit"
        id="submit_button"
        value="Complete Registration"
        disabled={isCheckBoxChecked}
      />
    </fieldset>
  );
}
export default Step3;
