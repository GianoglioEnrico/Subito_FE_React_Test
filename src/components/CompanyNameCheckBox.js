function CompanyNameCheckBox(props) {
  const { handleCheckbox } = props;
  return (
    <div>
      <p>Would you like your company name on your badges?</p>
      <input
        type="radio"
        id="company_name_toggle_on"
        name="company_name_toggle_group"
        onChange={handleCheckbox}
      />
      <label htmlFor="company_name_toggle_on">Yes</label>
      &emsp;
      <input
        type="radio"
        id="company_name_toggle_off"
        name="company_name_toggle_group"
        onChange={handleCheckbox}
      />
      <label htmlFor="company_name_toggle_off">No</label>
    </div>
  );
}

export default CompanyNameCheckBox;
