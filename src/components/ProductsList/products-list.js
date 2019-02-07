import React from 'react'
import { Row, Col } from 'antd'
import PropTypes from 'prop-types'

import ProductItem from '../ProductItem/product-item'

const ProductsList = props => (
  <Row type="flex" gutter={16}>
    {props.data.map(data => (
      <Col span={6} key={data.id}>
        <ProductItem key={data.id} data={data} />
      </Col>
    ))}
  </Row>
)

ProductsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
  })),
  // total: PropTypes.number,
}

ProductsList.defaultProps = {
  data: [],
  // total: 0,
}

export default ProductsList
