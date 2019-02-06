import React from 'react'
import { Col, Row } from 'antd'

import Filter from '../../components/Filter/filter'

class ProductContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Row type="flex">
        <Col span={6}><Filter /></Col>
      </Row>
    )
  }
}

export default ProductContainer
