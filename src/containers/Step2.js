import { useEffect, useState } from "react";
import CompanyNameCheckBox from "../components/CompanyNameCheckBox";
import CompanyNameInput from "../components/CompanyNameInput";
import SpecialAccommodationsCheckBox from "../components/SpecialAccommodationsCheckBox";
import SpecialAccommodationsTextArea from "../components/SpecialAccomodationsTextArea";
import Step2Result from "../components/Step2Result";

function Step2(props) {
  const { step2IsDisabled, setStep3IsDisabled, reset } = props;
  const [showCompanyNameInput, setShowCompanyNameInput] = useState(false);
  const [showSpecialAccommodationsInput, setShowSpecialAccommodationsInput] =
    useState(false);
  const [isCompanyNameChecked, setIsCompanyNameChecked] = useState(false);
  const [companyNameText, setCompanyNameText] = useState("");
  const [specialAccommodationsText, setSpecialAccommodationsText] =
    useState("");
  const [isSpecialAccommodationsChecked, setIsSpecialAccommodationsChecked] =
    useState(false);
  const companyNameCheckBox = document.querySelectorAll("#step_2>input");
  const specialAccomodationsCheckBox = document.querySelectorAll(
    "#step_2>div>input[type='radio']"
  );

  const handleCheckbox = (event) => {
    // Company Name Handling
    if (event.target.name === "company_name_toggle_group") {
      setIsCompanyNameChecked(true);
      // If you check "yes" then the Input for adding your company name gets displayed
      if (event.target.id === "company_name_toggle_on") {
        setShowCompanyNameInput(true);
      } else {
        setShowCompanyNameInput(false);
      }
    }
    // Special Accomodations Handling
    else {
      setIsSpecialAccommodationsChecked(true);
      // If you check "yes" then the Textarea for adding speacial accomodations gets displayed
      if (event.target.id === "special_accommodations_toggle_on") {
        setShowSpecialAccommodationsInput(true);
      } else {
        setShowSpecialAccommodationsInput(false);
      }
    }
  };
  const handleCompanyNameTextChange = (event) => {
    setCompanyNameText(event.target.value);
  };
  const handleSpecialAccommodationsChange = (event) => {
    setSpecialAccommodationsText(event.target.value);
  };
  useEffect(() => {
    // If both the group are checked then the green check icon gets displayed
    if (!reset && isCompanyNameChecked && isSpecialAccommodationsChecked) {
      setStep3IsDisabled(false);
    } else if (reset) {
      setStep3IsDisabled(true);
      setIsCompanyNameChecked(false);
      setIsSpecialAccommodationsChecked(false);
      companyNameCheckBox.forEach((companyName) => {
        companyName.checked = false;
      });
      specialAccomodationsCheckBox.forEach((accomodation) => {
        accomodation.checked = false;
      });
      setShowCompanyNameInput(false);
      setShowSpecialAccommodationsInput(false);
      setCompanyNameText("");
      setSpecialAccommodationsText("");
    }
  }, [
    isCompanyNameChecked,
    isSpecialAccommodationsChecked,
    setStep3IsDisabled,
    reset,
    companyNameCheckBox,
    specialAccomodationsCheckBox,
  ]);

  return (
    <fieldset
      id="step_2"
      disabled={step2IsDisabled}
      style={{
        height:
          isCompanyNameChecked && isSpecialAccommodationsChecked && "500px",
        opacity: step2IsDisabled ? "" : 1,
      }}
    >
      <legend>Step 2</legend>
      <CompanyNameCheckBox handleCheckbox={handleCheckbox} />
      <CompanyNameInput
        showCompanyNameInput={showCompanyNameInput}
        companyNameText={companyNameText}
        handleCompanyNameTextChange={handleCompanyNameTextChange}
      />
      <SpecialAccommodationsCheckBox handleCheckbox={handleCheckbox} />

      <SpecialAccommodationsTextArea
        showSpecialAccommodationsInput={showSpecialAccommodationsInput}
        specialAccommodationsText={specialAccommodationsText}
        handleSpecialAccommodationsChange={handleSpecialAccommodationsChange}
      />

      <Step2Result
        isCompanyNameChecked={isCompanyNameChecked}
        isSpecialAccommodationsChecked={isSpecialAccommodationsChecked}
      />
    </fieldset>
  );
}

export default Step2;
