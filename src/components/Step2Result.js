function Step2Result(props) {
  const { isCompanyNameChecked, isSpecialAccommodationsChecked } = props;
  return (
    <div
      id="step2_result"
      style={{
        top: isCompanyNameChecked && isSpecialAccommodationsChecked ? "85%" : 0,
        visibility:
          isCompanyNameChecked && isSpecialAccommodationsChecked
            ? "visible"
            : "hidden",
      }}
    >
      <i className="fa fa-check-circle" id="done-icon"></i>
    </div>
  );
}

export default Step2Result;
