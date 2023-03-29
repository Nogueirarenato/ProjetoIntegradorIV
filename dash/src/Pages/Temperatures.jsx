import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SideMenu from '../Components/SideMenu'

const Temperature= () => {
    return (
        <div>
            <h1>Temperatura</h1>
            <SideMenu></SideMenu>
        </div>
    );
}

export default Temperature;