import React from 'react'
import { Col, Row } from 'antd'
import { Formik } from 'formik'

import Filter from '../../components/Filter/filter'
import Search from '../../components/Search/search'

class ProductContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Formik
        name="product"
        onSubmit={values => console.log(values)}
        render={props => (
          <Row type="flex" gutter={32}>
            <Col span={6}>
              <Filter {...props} />
            </Col>
            <Col span={18}>
              <Search {...props} />
            </Col>
          </Row>
        )}
      />
    )
  }
}

export default ProductContainer
