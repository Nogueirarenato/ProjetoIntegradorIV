import React from 'react';
import { Link } from 'react-router-dom';

const DashBoard= () => {
    return (
        <div>
            <h1>DashBoard</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default DashBoard;