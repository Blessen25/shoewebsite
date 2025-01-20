import React, { useState } from 'react';
import './header.css'
import { ButtonTextOnly } from '../buttons/buttoncomponents.tsx';

const Header_comp = () => {

    const [lightmode, setLightMode] = useState(true);

    const handlelightmodechange = () =>{
        setLightMode((prevval) => !prevval)
    }


    return (
        <>
            <section id='Header'>
                <div className="headerchildone">
                    <div className="logodiv">
                        <img src="../assets/images/logo/QuickShoe.png" alt="Logoimg" className='Logoimg' />
                    </div>
                </div>
                <div className="headerchildtwo">
                    <a href="#">Home</a>
                    <a href="#">Shoe</a>
                    <a href="#">About</a>
                    <a href="#">Collection</a>
                </div>
                <div className="headerchildthree">
                    <ButtonTextOnly link={true} text='Login' fullwidth={false} />
                    <div className={`${lightmode ? ('lightmodediv') : ('darkmode')}`}>
                        <div className={`${lightmode? ('innerlightmodecircle'): ('innerdarkmodecircle')}`} onClick={handlelightmodechange}>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header_comp