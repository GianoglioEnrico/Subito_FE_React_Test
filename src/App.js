import "./App.css";
import Title from "./containers/Title";
import Step1 from "./containers/Step1";
import Step2 from "./containers/Step2";
import Step3 from "./containers/Step3";
import { useState } from "react";

function App() {
  const [step2IsDisabled, setStep2IsDisabled] = useState(true);
  const [step3IsDisabled, setStep3IsDisabled] = useState(true);

  const [reset, setReset] = useState(false);

  // This function gets triggered when at step3 user clicks: "complete form"
  const handleResetAll = (event) => {
    event.preventDefault();
    setStep2IsDisabled(true);
    setStep3IsDisabled(true);
    setReset(true);
  };

  return (
    <div id="page-wrap">
      <Title />
      <form action="#" method="post" onSubmit={handleResetAll}>
        <Step1
          setStep2IsDisabled={setStep2IsDisabled}
          reset={reset}
          setReset={setReset}
        />
        <Step2
          step2IsDisabled={step2IsDisabled}
          setStep3IsDisabled={setStep3IsDisabled}
          reset={reset}
        />
        <Step3 step3IsDisabled={step3IsDisabled} reset={reset} />
      </form>
    </div>
  );
}

export default App;
