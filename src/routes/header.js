import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = props => (
    <div>
        <Link to={'/'}>HomePage</Link>
        <span className={"divide"}>/</span>
        <Link to={'/user'}>UserPage</Link>
        <span className={"divide"}>/</span>
        <Link to={'/comment'}>CommentPage</Link>
    </div>
)

export default withRouter(Header)