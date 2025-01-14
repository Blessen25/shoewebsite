import React from 'react';
import './about.css';
import { Container_cstm } from '../extra/extra.tsx';

const About = () => {
    return (
        <Container_cstm child={
            <section id='About'>
                <h1>Hello World</h1>
            </section>
        }
        />
    )
}

export default About