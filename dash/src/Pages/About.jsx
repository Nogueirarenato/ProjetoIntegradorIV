import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const About = () => {
    return (
        <div>
        <h1>Sobre nós</h1>
        <SideMenu></SideMenu>
    </div>
    );
}

export default About;