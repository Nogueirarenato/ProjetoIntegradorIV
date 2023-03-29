import React from 'react';
import { Link } from 'react-router-dom';

const CurrentMonth = () => {
    return (
        <div>
            <h1>Mês Atual</h1>
            <Link to="/">retornar a página inicial</Link>
        </div>
    );
}

export default CurrentMonth;