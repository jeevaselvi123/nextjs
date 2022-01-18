import React from "react";
import InputControl from "../Component/InputControl";

const options = [
  {
    value: "csu",
    label: "CSU",
    chipLabel: "CSU Organisation In Career Insight",
  },
  {
    value: "bgt",
    label: "Burning Glass",
    chipLabel: "Burning Glass Organisation In Career Insight",
  },
  {
    value: "cilite",
    label: "CILITE",
    chipLabel: "Burning Glass Organisation In Career Insight",
  },
  {
    value: "adult",
    label: "Adult",
    chipLabel: "Burning Glass Organisation In Career Insight",
  },
  {
    value: "target",
    label: "Target Audience",
    chipLabel: "Target Audience Organisation In Career Insight",
  },
  {
    value: "hybrid",
    label: "Hybrid",
    chipLabel: "Hybrid Organisation In Career Insight",
  },
  {
    value: "Monore",
    label: "Monore Institution",
    chipLabel: "Monore Institution Organisation In Career Insight",
  },
];

function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function (a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

const styles = {
  select: {
    maxWidth: 600,
    width: "80%",
    margin: "0 auto",
    padding: "20px",
    background: "#f0e68c",
  },
};
const label =
  "Select, Multi select, Dropdown and auto complete functionalities";

const onChangeHandler = (value) => {
  console.log(value);
};

const input_control = () => {
  return (
    <div>
      <h1>Sample POC for input Control function using react-select library</h1>
      <InputControl
        style={styles.select}
        options={options.sort(dynamicSort("-label"))}
        label={label}
        isMulti={true}
        onchange={onChangeHandler}
      />
    </div>
  );
};

export default input_control;
