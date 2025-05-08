import React from 'react'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Login from './pages/Login'
import Admin from './pages/Admin'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './pages/NotFound'
import ProjectPage from './pages/Project'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    //NOTE: Set to Login component for eaiser testing
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: '/projects',
    element: <ProjectPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/projectmanagement',
    element: <ProtectedRoute>
      <Admin />
    </ProtectedRoute>,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />;
    </React.StrictMode>
  )
}


// export default function App() {
//   return <div style={{padding: '20px', background: 'lightblue', fontSize: '24px'}}>Hello, Vite!</div>
// }
