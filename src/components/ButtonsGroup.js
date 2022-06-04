import React, { useState } from "react";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
} from "@mui/material";

import PropTypes from "prop-types";

import { FREQUENCIES, ARRAY_LENGTH, METRICS_SORT_VALUES } from '../data/consts';


const ButtonsGroup = ({ state, values, onChange, sx }) => {
  const [value] = React.useState(state);
  const [selectedItem, setSelectedItem] = useState(FREQUENCIES.weekly);
  const [defaultItem, setDefaultItem] = useState(METRICS_SORT_VALUES.most_retweets);

  const handleOnChange = (event) => {
    setSelectedItem(event?.target?.value);
    setDefaultItem(event?.target?.value)
    onChange(event?.target?.value);
  };

  const items = Object.values(values);

  const formControlLabels = Array.from({ length: ARRAY_LENGTH }).map((_, idx) => {
    return (
      <FormControlLabel
        key={idx}
        sx={sx.btn}
        value={items[idx]}
        label={items[idx]}
        control={<Radio sx={sx.radio} />}
        checked={items[idx] === selectedItem || items[idx] === defaultItem}
      />
    );
  });

  return (
    <FormControl sx={sx.stack}>
      <RadioGroup
        row
        aria-labelledby="buttons-group"
        name="buttons-group"
        value={value}
        onChange={handleOnChange}
        sx={sx.radioGroup}
      >
        {formControlLabels}
      </RadioGroup>
    </FormControl>
  );
};

ButtonsGroup.propTypes = {
  state: PropTypes.any,
  values: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  sx: PropTypes.object,
};

export default ButtonsGroup;
