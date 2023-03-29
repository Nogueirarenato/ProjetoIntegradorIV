import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const Drives = () => {
    return (
        <div>
        <h1>Todos Acionamentos</h1>
        <SideMenu></SideMenu>
    </div>
    );
}

export default Drives;