import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Slider } from 'react-native-paper';

function SliderRangeExample() {
  const [values, setValues] = useState([20, 80]);

  const handleValuesChange = (newValues) => {
    setValues(newValues);
  };

  return (

      <Slider
        values={values}
        onValuesChange={handleValuesChange}
        min={0}
        max={100}
        step={1}
        sliderLength={300}
      />
  )
};

export default SliderRangeExample
