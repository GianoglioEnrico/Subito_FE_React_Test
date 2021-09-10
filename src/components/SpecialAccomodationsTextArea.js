function SpecialAccommodationsTextArea(props) {
  const {
    showSpecialAccommodationsInput,
    specialAccommodationsText,
    handleSpecialAccommodationsChange,
  } = props;
  return (
    <div
      id="special_accommodations_wrap"
      style={{
        height: showSpecialAccommodationsInput ? "100px" : 0,
        display: "flex",
      }}
    >
      <label htmlFor="special_accomodations_text">Please explain below:</label>
      <textarea
        rows="10"
        cols="10"
        id="special_accomodations_text"
        value={specialAccommodationsText}
        onChange={handleSpecialAccommodationsChange}
      ></textarea>
    </div>
  );
}

export default SpecialAccommodationsTextArea;
