import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NewPost from './components/NewPost'
import RootLayout from './routes/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Posts /> },
      { path: '/create-post', element: <NewPost /> },
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
