

import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from '../layouts/Navbar';
import SideBar from '../layouts/SideBar';


const Auth = () => {
    return (
        <div>
            <div className="main-wrapper">
                <SideBar/>
                <div className="page-wrapper">

                    <Navbar></Navbar>

                    {/* <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes> */}
                </div>
            </div>
        </div>
    );
};

export default Auth;