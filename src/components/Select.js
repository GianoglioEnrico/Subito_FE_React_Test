function Select(props) {
  const { handleSelect } = props;
  return (
    <select id="num_attendees" onChange={handleSelect}>
      <option id="opt_0" value="0">
        Please Choose
      </option>
      <option id="opt_1" value="1">
        1
      </option>
      <option id="opt_2" value="2">
        2
      </option>
      <option id="opt_3" value="3">
        3
      </option>
      <option id="opt_4" value="4">
        4
      </option>
      <option id="opt_5" value="5">
        5
      </option>
    </select>
  );
}
export default Select;
