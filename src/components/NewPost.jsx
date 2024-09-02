import classes from './NewPost.module.css'

function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  // #1
  // document.querySelector('textarea').addEventListener('change', function() {});

  // #2
  // const [enteredBody, setEnteredBody] = useState('');
  // function changeBodyHandler(event) {
  //     setEnteredBody(event.target.value);
  // }
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor='body'>Text</label>
        <input
          type='text'
          id='body'
          required
          rows={3}
          onChange={onBodyChange}
        />
      </p>
      <p>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' required onChange={onAuthorChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button type='submit'>Submit</button>
      </p>
    </form>
  )
}

export default NewPost
