import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu';

const DashBoard= () => {
    return (
 
        <div>
            <h1>Bashboard</h1>
            <SideMenu></SideMenu>
        </div>
        
    );
}

export default DashBoard;