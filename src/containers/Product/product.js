import React from 'react'
import { Col, Row } from 'antd'
import { Formik } from 'formik'

import SearchAPI from '../../apis/search/search'

import Filter from '../../components/Filter/filter'
import Search from '../../components/Search/search'
import ProductsList from '../../components/ProductsList/products-list'

class ProductContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = (params) => {
    SearchAPI.search(params)
      .then(response => this.setState({ data: response.data }))
  }

  render() {
    console.log(this.state.data)
    return (
      <Formik
        name="product"
        onSubmit={values => this.fetchData(values)}
        render={props => (
          <Row type="flex" gutter={32}>
            <Col span={6}>
              <Filter {...props} />
            </Col>
            <Col span={18}>
              <Search {...props} />
              <ProductsList data={this.state.data.results} total={this.state.data.total_hits} />
            </Col>
          </Row>
        )}
      />
    )
  }
}

export default ProductContainer
