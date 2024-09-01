import classes from './NewPost.module.css';

function NewPost() {
    // document.querySelector('textarea').addEventListener('change', function() {});
    function changeBodyHandler(event) {
        console.log(event.target.value);
    }
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <input type="text" id="body" required rows={3} onChange={changeBodyHandler}/>
            </p>
            <p>
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required/>
            </p>
        </form>
    )
}

export default NewPost;