import React from 'react'
import PropTypes from 'prop-types'

const CommentList = props => (
  <div>
    <h2>CommentList</h2>
      <ul>
      {
        Object.keys(props.comments).map(key =>
        <li key={`CommentList-${key}`}>
          <div className={'commentContent'}>{props.comments[key]['text']}</div>
          <span className={'commentUser'}>{props.comments[key]['author']}</span>
          <span className={'btn'}><a href={'#'}>reply</a></span>
        </li>
        )
      }
      </ul>
    </div>
)

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList
