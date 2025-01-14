import React from 'react';
import Api_component from '../components/apicomponents/api.tsx';
import Home from '../components/home/home.tsx';
import { Container_cstm } from '../components/extra/extra.tsx';
import Header_comp from '../components/header/header.tsx';

const Main_component = () => {
    return (
        <>
            <Header_comp />
            <Home />
        </>
    )
}

export default Main_component