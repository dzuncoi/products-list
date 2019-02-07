import React from 'react'
import { Form, Field } from 'formik'

import TextInput from '../../elements/Input/input'

const Search = () => (
  <Form>
    <Field
      id="q"
      name="q"
      component={TextInput}
      placeholder="Search"
    />
  </Form>
)

export default Search
