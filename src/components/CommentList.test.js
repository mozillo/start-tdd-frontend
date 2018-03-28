import React from 'react'
import { shallow } from 'enzyme'
import CommentList from './CommentList'

describe('<CommentList />', () => {
  it('应该显示一个带用户信息的评论列表', () => {
    const mockComments = [
      { text: 'Hello Moto', author: 'Test' },
      { text: 'Hello lean flow', author: 'Test' }
    ]
    const mockLength = mockComments.length
    const wrapper = shallow(<CommentList comments={mockComments} />)
    expect(wrapper.find('li').length).toEqual(mockLength)
    expect(wrapper.find('.commentUser').length).toEqual(mockLength)
    expect(wrapper.find('.commentContent').length).toEqual(mockLength)
    expect(wrapper.find('.btn').length).toEqual(mockLength)
  })
})
