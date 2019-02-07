import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'antd'

import styles from './product-item.module.scss'

const ProductItem = ({ data }) => (
  <Card
    bordered={false}
    cover={<img alt={data.name} src={data.thumbnail_url} />}
    className={styles.productCard}
    hoverable
  >
    <Card.Meta
      className={styles.productMeta}
      title={data.name}
      description={`by ${data.user.screen_name}`}
    />
  </Card>
)

ProductItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    thumbnail_url: PropTypes.string,
    user: PropTypes.shape({
      screen_name: PropTypes.string,
    }),
  }),
}

ProductItem.defaultProps = {
  data: [],
}

export default ProductItem
