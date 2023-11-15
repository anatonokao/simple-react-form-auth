import React from 'react';
import './App.css';
import {
    createHashRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';

const router = createHashRouter(
    createRoutesFromElements(
        <Route path="/">
            <Route path="/" element={<HomePage/>}/>
            <Route path="/auth" element={<AuthPage/>}/>
        </Route>
    )
);

const App = () => {
    return (
        <div className="wrapper">
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
