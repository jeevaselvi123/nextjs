import React, { useState, useEffect } from "react";
import Select, { components } from "react-select";
import makeAnimated from "react-select/animated";
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";
import MySelect from "./MySelect";

const InputControl = ({ style, options, label, onchange, isMulti }) => {
  const [state, settempstate] = useState(null);
  const [optionSelected, setoptionSelected] = useState(null);

  const handleChangeSelected = (selected) => {
    setoptionSelected(selected);
  };

  useEffect(() => {
    setSelectedOptions([{ label: "All", value: "*" }, ...options]);
  }, [options]);

  const Control = ({ children, ...props }) => {
    // @ts-ignore
    // const { emoji, onEmojiClick } = props.selectProps;
    //const style = { cursor: 'pointer' };

    const length = getValue().length;

    return (
      <components.Control {...props}>
        <span>{`Custom Report (${length} Item${
          length > 1 ? "s" : ""
        }) selected`}</span>
        2
      </components.Control>
    );
  };

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [tempState, setState] = useState(null);
  const handleChange = (selected) => {
    setState(selected);
  };

  const ValueContainer = ({ children, ...props }) => {
    let [values, input] = children;

    if (Array.isArray(values)) {
      const plural = values.length === 1 ? "" : "s";
      if (values.length !== 1) {
        values = `Custom Report ${values.length} item${plural} selected`;
      }
    }

    return (
      <components.ValueContainer {...props}>
        {values}
        {input}
      </components.ValueContainer>
    );
  };

  const MultiValue = (props) => (
    <components.MultiValue {...props}>
      {props.data.chipLabel}
    </components.MultiValue>
  );

  const SingleValue = (props) => (
    <components.SingleValue {...props}>
      {props.data.chipLabel}
    </components.SingleValue>
  );

  function getDropdownButtonLabel({ placeholderButtonLabel, value }) {
    if (value && value.some((o) => o.value === "*")) {
      return `${placeholderButtonLabel}: All`;
    } else {
      return `${placeholderButtonLabel}: ${value.length} selected`;
    }
  }

  function onChangeValue(value, event) {
    if (event.action === "select-option" && event.option.value === "*") {
      this.setState(this.options);
    } else if (
      event.action === "deselect-option" &&
      event.option.value === "*"
    ) {
      this.setState([]);
    } else if (event.action === "deselect-option") {
      this.setState(value.filter((o) => o.value !== "*"));
    } else if (value.length === this.options.length - 1) {
      this.setState(this.options);
    } else {
      this.setState(value);
    }
  }

  const animatedComponents = makeAnimated();
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "3px dotted pink",
      color: state.isSelected ? "red" : "blue",
      padding: 20,
      width: 100,
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };
  return (
    <>
      <div style={style}>
        <h1>{label}</h1>
        <Select
          style={customStyles}
          hideSelectedOptions={false}
          components={animatedComponents}
          closeMenuOnSelect={false}
          placeholder="Select.."
          options={options}
          isClearable={true}
          onChange={onchange}
          defaultValue={options[1]}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "hotpink",
              primary: "black",
            },
          })}
        />
      </div>
      <br/>
      <div style={style}>
        <h1 className="bg-gray-900">DropDown with Checkbox options</h1>
        <Select
          options={options}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={true}
          placeholder="Select.."
          components={{
            Option,
            MultiValue,
          }}
          onChange={handleChange}
          allowSelectAll={true}
          value={tempState}
        />
      </div>
      <br></br>
      <div style={style}>
        {/* <ReactMultiSelectCheckboxes
          style={customStyles}
          options={[{ label: "All", value: "*" }, ...options]}
          placeholderButtonLabel="Custom Report"
          getDropdownButtonLabel={getDropdownButtonLabel}
          value={selectedOptions}
          onChange={onChangeValue}
          setState={setSelectedOptions}
        /> */}
        <MySelect
          // styles={{
          //   option: (base) => ({
          //     ...base,
          //     border: `1px solid blue`,
          //     height: "100%",
          //   }),
          // }}
          options={options}
          isMulti
          closeMenuOnSelect={false}
          hideSelectedOptions={false}
          components={{
            Option,
            MultiValue,
            ValueContainer,
            animatedComponents,
          }}
          onChange={handleChangeSelected}
          allowSelectAll={true}
          value={optionSelected}
        />
      </div>
    </>
  );
};

export default InputControl;
