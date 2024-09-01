import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <ul className={classes.posts}> 
            <Post author="AnnJa" body="body1"/>
            <Post author="Awesome" body="body2"/>
            <Post author="Aoi"/>
        </ul>
    )
}

export default PostsList;