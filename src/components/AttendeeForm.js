function AttendeeForm(props) {
  const { inputsToShow, handleInputChange, doneIcon, step1Height } = props;
  return (
    <div
      id="attendee_container"
      style={{
        height: inputsToShow !== "0" ? step1Height : 0,

        visibility: inputsToShow !== "0" ? "visible" : "hidden",
      }}
    >
      <h3>Please provide full names:</h3>

      <div
        id="attendee_1_wrap"
        style={{ visibility: inputsToShow >= 1 ? "visible" : "hidden" }}
      >
        <label htmlFor="name_attendee_1"> Attendee 1 Name: </label>
        <input type="text" id="name_attendee_1" onChange={handleInputChange} />
      </div>
      <div
        id="attendee_2_wrap"
        style={{ visibility: inputsToShow >= 2 ? "visible" : "hidden" }}
      >
        <label htmlFor="name_attendee_2"> Attendee 2 Name: </label>
        <input type="text" id="name_attendee_2" onChange={handleInputChange} />
      </div>
      <div
        id="attendee_3_wrap"
        style={{ visibility: inputsToShow >= 3 ? "visible" : "hidden" }}
      >
        <label htmlFor="name_attendee_3"> Attendee 3 Name: </label>
        <input type="text" id="name_attendee_3" onChange={handleInputChange} />
      </div>
      <div
        id="attendee_4_wrap"
        style={{ visibility: inputsToShow >= 4 ? "visible" : "hidden" }}
      >
        <label htmlFor="name_attendee_4"> Attendee 4 Name: </label>
        <input type="text" id="name_attendee_4" onChange={handleInputChange} />
      </div>
      <div
        id="attendee_5_wrap"
        style={{ visibility: inputsToShow >= 5 ? "visible" : "hidden" }}
      >
        <label htmlFor="name_attendee_5"> Attendee 5 Name: </label>
        <input type="text" id="name_attendee_5" onChange={handleInputChange} />
      </div>

      <div
        id="step1_result"
        style={{
          visibility: doneIcon ? "visible" : "hidden",
          top: doneIcon ? "90%" : 0,
        }}
      >
        <i className="fa fa-check-circle" id="done-icon"></i>
      </div>
    </div>
  );
}
export default AttendeeForm;
