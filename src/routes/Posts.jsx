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
    <main>
      <PostsList 
      // onStopPosting={hideModalHandler} isPosting={modalIsVisible}
      />
    </main>
    </>
  )
}

export default Posts
