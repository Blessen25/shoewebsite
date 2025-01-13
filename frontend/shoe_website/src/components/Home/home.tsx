import React from 'react';
import './home.css';
import { Container_cstm, Content_cstm } from '../extra/extra.tsx';

const Home = () => {
    return(
        <>
        <Container_cstm child={
             <>
             <section id='Home'>
               <h1>Hello World</h1>
               <h2>Hello Kutta</h2>
             </section>
             </>
        } />
        </>
    )
}

export default Home
