import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useState } from 'react'

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([])

  function addPostHandler(newPost) {
    // setPosts([newPost, ...posts]); //given this setPosts is async, so we can't rely on the current state
    setPosts((prevPosts) => [newPost, ...prevPosts]); //ensure that the latest correct state is used.
  }

  return (
    <>
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      ) : null}
      {/* null or undefined or false are display nothing */}

      {posts.length > 0 && (
      <ul className={classes.posts}>
        <Post author='Awesome' body='body2' />
        <Post author='Aoi' />
        {
          posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} /> //key in list in order to help react to identify which item has changed, added or removed and manage the state of the list effectively.
          ))
        }
      </ul>
      )}

      {posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There is no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  )
}

export default PostsList
