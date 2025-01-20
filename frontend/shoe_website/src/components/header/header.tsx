import React from 'react';
import './header.css'
import { ButtonTextOnly } from '../buttons/buttoncomponents.tsx';

const Header_comp = () => {
    return (
        <>
            <section id='Header'>
                <div className="headerchildone">
                    <div className="logodiv">
                        <img src="../assets/images/logo/QuickShoe(Light).png" alt="" className='Logoimg' />
                    </div>
                </div>
                <div className="headerchildtwo">
                    <a href="#">Home</a>
                    <a href="#">Shoe</a>
                    <a href="#">About</a>
                    <a href="#">Collection</a>
                </div>
                <div className="headerchildthree">
                    <ButtonTextOnly link={true} text='Hello' fullwidth={false} />
                </div>
            </section>
        </>
    )
}

export default Header_comp