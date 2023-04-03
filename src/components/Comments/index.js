import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const initialCommentsList = []

// Write your code here
class Comments extends Component {
  state = {CommentsList: initialCommentsList, name: '', comment: ''}

  toggleIsLiked = id => {
    this.setState(prevState => ({
      CommentsList: prevState.CommentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  deleteComment = id => {
    const {CommentsList} = this.state
    this.setState({
      CommentsList: CommentsList.filter(comment => comment.id !== id),
    })
  }

  onAddComment = event => {
    event.preventDefault()
    const {name, comment} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      CommentsList: [...prevState.CommentsList, newComment],
      name: '',
      comment: '',
    }))
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangeComment = event => {
    this.setState({comment: event.target.value})
  }

  countComments = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {name, comment, CommentsList} = this.state

    return (
      <div className="container">
        <div className="add-comment-container">
          <div className="input-container">
            <h1 className="title">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <form onSubmit={this.onAddComment}>
              <input
                value={name}
                className="input-value"
                placeholder="Your Name"
                onChange={this.onChangeName}
              />
              <textarea
                value={comment}
                className="textarea-input"
                cols="50"
                rows="5"
                placeholder="Your Comment"
                onChange={this.onChangeComment}
              />
              <button
                type="submit"
                className="button"
                onClick={this.countComments}
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
            className="comment-image"
          />
        </div>
        <hr />
        <div className="comment-container">
          <p className="comment-count">{CommentsList.length}</p>
          <p className="comments-name">Comments</p>
        </div>
        <ul className="show-comment-container">
          {CommentsList.map(eachComment => (
            <CommentItem
              key={eachComment.id}
              eachComment={eachComment}
              toggleIsLiked={this.toggleIsLiked}
              deleteComment={this.deleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default Comments
