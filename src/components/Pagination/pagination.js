import React from 'react'
import PropTypes from 'prop-types'
import { Pagination as AntdPagination } from 'antd'
import { Form, Field } from 'formik'

const Pagination = props => (
  <Form>
    <Field
      name="page"
      render={({ field, form }) => (
        <AntdPagination
          current={field.value}
          total={props.total}
          onChange={(page) => {
            form.setFieldValue(field.name, page)
            setTimeout(() => form.submitForm(), 0) // Known issue at https://github.com/jaredpalmer/formik/issues/1218#issuecomment-450935278
          }}
        />
      )}
    />
  </Form>
)

Pagination.propTypes = {
  total: PropTypes.number,
}

Pagination.defaultProps = {
  total: 0,
}

export default Pagination
