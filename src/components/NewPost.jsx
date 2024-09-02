import classes from './NewPost.module.css'
import { useState } from 'react'

function NewPost({ onCancel }) {
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
    console.log(postData);
    onCancel()
  }
  return (
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
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  )
}

export default NewPost
