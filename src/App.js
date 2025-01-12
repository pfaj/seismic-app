import Home from './pages/Home.js'
import Contact from './pages/Contact.js'
import NotFound from './pages/NotFound.js'
import ProjectPage from './pages/Project.js'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <NotFound/>
    },
    {
        path: '/projects',
        element: <ProjectPage/>,
    },
    {
        path: '/contact',
        element: <Contact/>,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
