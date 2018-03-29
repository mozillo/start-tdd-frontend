import React from 'react'
import CommentList from '../components/CommentList'

const comments = [
    { text: 'Good for you', author: 'Mot', vote: 105 },
    { text: 'Positive', author: 'Sunny', vote: 35 },
]

const CommentPage = props => (
    <CommentList comments={comments} />
)

export default CommentPage