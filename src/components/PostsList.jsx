import Post from './Post'
import classes from './PostsList.module.css'
import NewPost from '../routes/NewPost'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function PostsList() {
  const posts = useLoaderData();

  //react cannot use await here due to PostsList function cannot be async, so we need to use then synatax

  // Below code creates infinite loop. To fix it, use useEffect.
  // fetch('http://localhost:8080/posts').then((response) => {
  //   return response.json();
  // }).then((data) => {data.posts});
  // solution is below
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch('http://localhost:8080/posts');
  //     const resData = await response.json();
  //     setPosts(resData.posts); //with useEffect, we can ensure that the data is fetched only once when the component is mounted. And cause no infinite loop.
  //     setIsFetching(false);
  //   }
    
  //   fetchPosts();
    
  // }, []);



  // const [isFetching, setIsFetching] = useState(false);
  // const [posts, setPosts] = useState([])

  

  return (
    <>
      {/* {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onBodyChange={bodyChangeHandler}
            // onAuthorChange={authorChangeHandler}
            onCancel={onStopPosting}
            onAddPost={addPostHandler}
          />
        </Modal>
      ) : null}
      null, undefined or false are display nothing */}

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

      {/* {isFetching && (<div>
        <p style={{textAlign: 'center', color: 'white'}}>Loading...</p>
      </div>)} */}
    </>
  )
}

export default PostsList
