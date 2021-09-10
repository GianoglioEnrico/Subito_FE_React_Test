function SpecialAccommodationsCheckBox(props) {
  const { handleCheckbox } = props;
  return (
    <div>
      <p>Will anyone in your group require special accommodations?</p>
      <input
        type="radio"
        id="special_accommodations_toggle_on"
        name="special_accommodations_toggle"
        onChange={handleCheckbox}
      />
      <label htmlFor="special_accommodations_toggle_on">Yes</label>
      &emsp;
      <input
        type="radio"
        id="special_accommodations_toggle_off"
        name="special_accommodations_toggle"
        onChange={handleCheckbox}
      />
      <label htmlFor="special_accommodations_toggle_off">No</label>
    </div>
  );
}

export default SpecialAccommodationsCheckBox;
