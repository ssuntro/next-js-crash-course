import MainHeader from './components/MainHeader'
import PostsList from './components/PostsList'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false)
  function showModalHandler() {
    setModalIsVisible(true)
  }
  function hideModalHandler() {
    setModalIsVisible(false)
  }
  return (
    <>
    <MainHeader onCreatePost={showModalHandler}/>
    <main>
      <h1>Hello World!</h1>
      <PostsList onStopPosting={hideModalHandler} isPosting={modalIsVisible}/>
    </main>
    </>
  )
}

export default App
