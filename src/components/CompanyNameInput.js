function CompanyNameInput(props) {
  const { showCompanyNameInput, companyNameText, handleCompanyNameTextChange } =
    props;
  return (
    <div
      id="company_name_wrap"
      style={{ height: showCompanyNameInput ? "40px" : 0 }}
    >
      <label htmlFor="company_name"> Company Name: </label>
      <input
        type="text"
        id="company_name"
        value={companyNameText}
        onChange={handleCompanyNameTextChange}
      />
    </div>
  );
}
export default CompanyNameInput;
