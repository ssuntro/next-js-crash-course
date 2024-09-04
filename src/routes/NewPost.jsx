import classes from './NewPost.module.css'
import { useState } from 'react'
import Modal from '../components/Modal'
import { Form, Link, redirect } from 'react-router-dom'

function NewPost() {
  // #1
  // document.querySelector('textarea').addEventListener('change', function() {});

  // #2
  // const [enteredBody, setEnteredBody] = useState('');
  // function changeBodyHandler(event) {
  //     setEnteredBody(event.target.value);
  // }

  const [enteredBody, setEnteredBody] = useState('')
  const [enteredAuthor, setEnteredAuthor] = useState('')
  

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value)
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value)
  }

  // function submitHandler(event) {
  //   event.preventDefault(); //prevent the default behavior of the form which is to send a request to the react server and reload the page. which there is not handler code in react app to handle the request.
  //   const postData = {
  //       body: enteredBody,
  //       author: enteredAuthor
  //   }
  //   // onAddPost(postData);
  //   fetch('http://localhost:8080/posts', {
  //     method: 'POST',
  //     body: JSON.stringify(postData),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   // onCancel()
  // }

  // function addPostHandler(newPost) {
  //   // setPosts([newPost, ...posts]); //given this setPosts is async, so we can't rely on the current state
  //   setPosts((prevPosts) => [newPost, ...prevPosts]); //ensure that the latest correct state is used.
  // }
  return (
    <Modal>
      <Form method='post' className={classes.form} 
      // onSubmit={submitHandler}
      >
        <p>
          <label htmlFor='body'>Text</label>
          <input
            type='text'
            id='body'
            required
            rows={3}
            name="body"
            // onChange={bodyChangeHandler}
          />
        </p>
        <p>
          <label htmlFor='name'>Your Name</label>
          <input type='text' id='name' required 
          name="author"
          // onChange={authorChangeHandler} 
          />
        </p>
        <p className={classes.actions}>
          <Link type='button' to="..">Cancel</Link>
          <button type='submit'>Submit</button>
        </p>
      </Form>
    </Modal>
  )
}

export default NewPost

export async function action({request}) {
  console.log('request', request)
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); //{body: '...', author: '...'}
  // const postData = {
    //     body: enteredBody,
    //     author: enteredAuthor
    // }
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return redirect('/');
}