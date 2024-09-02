import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from './NewPost'
import Modal from './Modal'
import { useEffect, useState } from 'react'

function PostsList({ isPosting, onStopPosting }) {
  //react cannot use await here due to PostsList function cannot be async, so we need to use then synatax

  // Below code creates infinite loop. To fix it, use useEffect.
  // fetch('http://localhost:8080/posts').then((response) => {
  //   return response.json();
  // }).then((data) => {data.posts});
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      setPosts(resData.posts); //with useEffect, we can ensure that the data is fetched only once when the component is mounted. And cause no infinite loop.
      setIsFetching(false);
    }
    
    fetchPosts();
    
  }, []);



  const [isFetching, setIsFetching] = useState(false);
  const [posts, setPosts] = useState([])

  function addPostHandler(newPost) {
    
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: {
        'Content-Type': 'application/json',
      },
    });

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

      {!isFetching && posts.length > 0 && (
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

      {!isFetching && posts.length === 0 && (
        <div style={{textAlign: 'center', color: 'white'}}>
          <h2>There is no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {isFetching && (<div>
        <p style={{textAlign: 'center', color: 'white'}}>Loading...</p>
      </div>)}
    </>
  )
}

export default PostsList
