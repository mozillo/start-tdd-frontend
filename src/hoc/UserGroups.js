import React from 'react'
import { withDataSource } from './withDataSource'

const renderGroup = (key, group) => [
    <dt key={`group_name_${key}`}>{group['group_name']}</dt>,
    <dd key={`group_phone_${key}`}>{group['description']}</dd>
]

const UserGroups = props => {
    const { dataSource } = props
    const { uid, groups } = dataSource
    return (
        <div>
            <h3>UserGroups [{uid}]</h3>
            <dl>
            {
                Object.keys(groups).map(key => renderGroup(key, groups[key]))
            }
            </dl>
        </div>
    )
}

export default withDataSource(
    UserGroups, 
    (DataSource, props) => DataSource.getUserGroups(props.uid)
)
