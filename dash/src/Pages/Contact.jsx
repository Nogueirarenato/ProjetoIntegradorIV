import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const Contact = () => {
    return (
        <div>
            <h1>Contato</h1>
            <SideMenu></SideMenu>
        </div>
    );
}

export default Contact;