import React from 'react'
import { Radio } from 'antd'

const RadioGroup = ({
  field,
  form,
  ...rest
}) => (
  <Radio.Group
    value={field.value}
    onChange={e => form.setFieldValue(field.name, e.target.value)}
    {...rest}
  />
)

export default {
  Option: Radio,
  Group: RadioGroup,
}
