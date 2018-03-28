import React from 'react'
import { DataSource } from './DataSource'

// hoc
export const withDataSource = (BaseComponent, injectData) => {
    return class extends React.Component {
        render() {
            return <BaseComponent {...this.props} dataSource={injectData(DataSource, this.props)} />
        }
    }
}