import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const CurrentMonth = () => {
    return (
     
        <div>
            <h1>Mês Atual</h1>
            <SideMenu></SideMenu>
        </div>
    );
}

export default CurrentMonth;