import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const Services= () => {
    return (
        <div>
            <h1>Servicos</h1>
            <SideMenu></SideMenu>
        </div>
    );
}

export default Services;