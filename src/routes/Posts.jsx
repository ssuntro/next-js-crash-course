import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'
import PostsList from '../components/PostsList'
import { useState } from 'react'

function Posts() {
  // const [modalIsVisible, setModalIsVisible] = useState(false)
  // function showModalHandler() {
  //   setModalIsVisible(true)
  // }
  // function hideModalHandler() {
  //   setModalIsVisible(false)
  // }
  return (
    <>
    {/* <MainHeader onCreatePost={showModalHandler}/> */}
    <Outlet />
    <main>
      <PostsList 
      // onStopPosting={hideModalHandler} isPosting={modalIsVisible}
      />
    </main>
    </>
  )
}

export default Posts
export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const data = await response.json()
  return data.posts;
}