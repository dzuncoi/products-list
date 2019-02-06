import React from 'react'
import { Collapse } from 'antd'

const { Panel } = Collapse

const Filter = () => (
  <div>
    <h2>Filter</h2>
    <Collapse bordered={false}>
      <Panel header="Availability" key="availability">
        Availability
      </Panel>
      <Panel header="Substrate" key="substrate">
        Substrate
      </Panel>
      <Panel header="Exclude Centered Layouts" key="exclude_center_layout">
        Exclude Centered Layouts
      </Panel>
      <Panel header="View" key="view">
        View
      </Panel>
      <Panel header="Color Family" key="color_familyy">
        Color Family
      </Panel>
    </Collapse>
  </div>
)

export default Filter
