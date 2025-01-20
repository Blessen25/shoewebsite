import React from 'react';
import Api_component from '../components/apicomponents/api.tsx';
import Home from '../components/Home/home.tsx';
import { Container_cstm } from '../components/extra/extra.tsx';
import Header_comp from '../components/header/header.tsx';
import './main_screen.css';

const Main_component = () => {
    return (
        <>
            <Header_comp />
            <Home />
        </>
    )
}

export default Main_component