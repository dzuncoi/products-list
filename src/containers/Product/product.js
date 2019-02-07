import React from 'react'
import { Col, Row, Icon, Empty } from 'antd'
import { Formik } from 'formik'

import SearchAPI from '../../apis/search/search'

import Filter from '../../components/Filter/filter'
import Search from '../../components/Search/search'
import ProductsList from '../../components/ProductsList/products-list'
import Pagination from '../../components/Pagination/pagination'

import { generateParams } from '../../helpers/filter/filter'

class ProductContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: {},
      isLoading: false,
    }
    this.initialParams = {
      limit: 40,
      page: 1,
    }
  }

  componentDidMount() {
    this.fetchData(generateParams(this.initialParams))
  }

  fetchData = (params) => {
    this.setState({ isLoading: true })
    SearchAPI.search(generateParams(params))
      .then(response => this.setState({ data: response.data, isLoading: false }))
  }

  render() {
    const { isLoading, data } = this.state
    const isEmpty = !isLoading && data.results && data.results.length <= 0
    return (
      <Formik
        name="product"
        onSubmit={values => this.fetchData(values)}
        initialValues={this.initialParams}
        render={formikProps => (
          <Row type="flex" gutter={32}>
            <Col span={6}>
              <Filter {...formikProps} />
            </Col>
            <Col span={18}>
              <Search {...formikProps} />
              {isLoading && <Icon type="loading" />}
              {isEmpty && <Empty />}
              {(!isLoading && !isEmpty) && (
                <React.Fragment>
                  <ProductsList
                    data={this.state.data.results}
                    total={this.state.data.total_hits}
                  />
                  <Pagination
                    total={this.state.data.total_hits}
                    {...formikProps}
                  />
                </React.Fragment>
              )}
            </Col>
          </Row>
        )}
      />
    )
  }
}

export default ProductContainer
