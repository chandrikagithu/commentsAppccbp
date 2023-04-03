// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, deleteComment} = props
  const {name, comment, date, isLiked, initialClassName, id} = eachComment
  console.log(isLiked)
  const firstLetter = name ? name[0].toUpperCase() : ''
  const postedTime = formatDistanceToNow(date)
  const likeTextClassName = isLiked ? 'button1 active' : 'button1'

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const onClickLike = () => {
    const {toggleIsLiked} = props

    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    deleteComment(id)
  }

  return (
    <li className="list-container">
      <div className="name-container">
        <div className={initialClassName}>
          <p className="initial">{firstLetter}</p>
        </div>

        <p className="name">{name}</p>
        <p className="time">{postedTime} ago</p>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button1"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}
export default CommentItem
