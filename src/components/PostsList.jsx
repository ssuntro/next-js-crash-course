import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'

import Modal from './Modal'

function PostsList({isPosting, onStopPosting}) {
  
  
  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      ) : null} 
      {/* null or undefined or false are display nothing */}

      <ul className={classes.posts}>
        <Post author='Awesome' body='body2' />
        <Post author='Aoi' />
      </ul>
    </>
  )
}

export default PostsList
