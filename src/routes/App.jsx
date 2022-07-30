import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.scss';

const App = ()=>{
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                        <Route exact path="/" element={<Home/>} />
                        <Route exact path="/login" element={<Login/>} />{/*Lo define como ruta exacta y ubica su dirección*/ }
                        <Route exact path="/recovery-password" element={<RecoveryPassword/>} />
                        <Route path="*" element={<NotFound/>} /> {/*Precisamente esta no es precisa, para que cubra el error 404*/}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;