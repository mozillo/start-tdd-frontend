import React from 'react'
import FlexLayout from './FlexLayout'
import UserFriends from './UserFriends';
import UserGroups from './UserGroups'
import { withDataSource } from './withDataSource'

class UserMainPage extends React.Component {
    render() {
        const { uid, dataSource } = this.props
        const { name, email, avatar } = dataSource
        return (
            <div>
                <h2>UserMainPage</h2>
                <ul>
                    <li>{name}</li>
                    <li>{email}</li>
                    <li>{avatar}</li>
                </ul>
                <FlexLayout>
                    <UserFriends uid={uid} />
                    
                    <UserGroups  uid={uid} />
                </FlexLayout>
            </div>
        )
    }
}

export default withDataSource(
    UserMainPage, 
    (DataSource, props) => DataSource.getUserProfile(props.uid)
)
