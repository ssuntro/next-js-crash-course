import classes from './NewPost.module.css'
import { useState } from 'react'
import Modal from '../components/Modal'
import { Link } from 'react-router-dom'

function NewPost({  onAddPost }) {
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

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
        body: enteredBody,
        author: enteredAuthor
    }
    onAddPost(postData);
    // onCancel()
  }
  return (
    <Modal>
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor='body'>Text</label>
        <input
          type='text'
          id='body'
          required
          rows={3}
          onChange={bodyChangeHandler}
        />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' required onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <Link type='button' to="..">Cancel</Link>
        <button type='submit'>Submit</button>
      </p>
    </form>
    </Modal>
  )
}

export default NewPost
