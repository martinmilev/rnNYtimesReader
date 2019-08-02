import React from 'react'
import { Picker } from 'react-native'
import { Row } from '../Layout'
import PropTypes from 'prop-types'


const RangePicker = ({ selectedValue, onSelect }) => {
  const values = {
    '1': 'Today',
    '7': 'Last week',
    '30': 'Last 30 days'
  }
  return (
    <Row style={{ justifyContent: 'center' }}>
      <Picker
        onValueChange={(itemValue) => onSelect(itemValue)}
        style={{ width: 160, height: 30 }}
      >
        <Picker.Item label={values[selectedValue]} value={selectedValue} />
        {Object.keys(values).map(key => key != selectedValue && (
          <Picker.Item label={values[key]} value={key} key={key} />
        ))}
      </Picker>
    </Row>
  )
}

RangePicker.propTypes = {
  selectedValue: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default RangePicker
