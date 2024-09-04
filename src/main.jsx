import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postLoader} from './routes/Posts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost, { action as addNewPostAction } from './routes/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Posts />, 
        loader: postLoader,
        children: [
        { path: '/create-post', element: <NewPost />, action: addNewPostAction },
      ] },
      
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
