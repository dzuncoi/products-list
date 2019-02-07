import React from 'react'
import PropTypes from 'prop-types'
import { Collapse, Button, Badge, Row, Col } from 'antd'
import { Form, Field } from 'formik'

import Radio from '../../elements/RadioGroup/radio-group'
import styles from './filter.module.scss'

import { getBadgeCount } from '../../helpers/filter/filter'
import filters from '../../fixtures/filters'

const { Panel } = Collapse

const Filter = props => (
  <Form>
    <Row type="flex" justify="space-between">
      <Col>
        <Badge count={getBadgeCount(props.values)}>
          <h2 style={{ paddingRight: 12 }}>Filter</h2>
        </Badge>
      </Col>
      <Col>
        <Button htmlType="submit" type="primary" disabled={getBadgeCount(props.values) === 0}>Apply</Button>
      </Col>
    </Row>
    <Collapse bordered={false}>
      {filters.map(filter => (
        <Panel header={filter.name} key={filter.value}>
          <Field
            name={filter.value}
            component={Radio.Group}
          >
            {filter.options.map(option => (
              <Radio.Option
                className={styles.radioOption}
                value={option.value}
                key={option.value}
              >
                {option.name}
              </Radio.Option>
            ))}
          </Field>
        </Panel>
      ))}
    </Collapse>
  </Form>
)

Filter.propTypes = {
  values: PropTypes.shape({
    q: PropTypes.string,
  }),
}

Filter.defaultProps = {
  values: {},
}

export default Filter
