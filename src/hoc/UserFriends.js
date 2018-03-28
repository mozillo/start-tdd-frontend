import React from 'react'
import { withDataSource } from './withDataSource'

const renderFriend = (key, friend) => [
    <dt key={`friend_name_${key}`}>{friend['name']}</dt>,
    <dd key={`friend_phone_${key}`}>{friend['phone']}</dd>
]

const UserFriends = props => {
    const { dataSource } = props
    const { uid, friends } = dataSource
    return (
        <div>
            <h3>UserFriends [{uid}]</h3>
            <dl>
            {
                Object.keys(friends)
                .map(key => renderFriend(key, friends[key]))
            }
            </dl>
        </div>
    )
}

export default withDataSource(
    UserFriends, 
    (DataSource, props) => DataSource.getUserFriends(props.uid)
)
