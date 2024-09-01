import classes from './Post.module.css'; //importing the Post component

function Post(props) {
    return (
        <li className={classes.post} >
        {/* <div className='post' style = {{color: 'red', textAlign: 'left'}}> */}
            <p className={classes.author}>{props.author}</p>
            <p className={classes.body}>{props.body}</p>
        </li>
    )
}

export default Post; //first custom react component