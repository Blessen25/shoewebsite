import React, { useState } from 'react';
import './header.css'
import { ButtontextandIcon, ButtonTextOnly } from '../buttons/buttoncomponents.tsx';
import { FaBars, FaHome, FaLink, FaUserAlt } from 'react-icons/fa';

const Header_comp = () => {

    const [lightmode, setLightMode] = useState(true);
    const [activeslider, setactiveSlider] = useState(false);

    const handlelightmodechange = () => {
        setLightMode((prevval) => !prevval)
    }

    const handleactiveSlider = () => {
        setactiveSlider((prevval) => !prevval)
        console.log(activeslider)
    }


    return (
        <>
            <section id='Header'>
                <div className="headerchildmenulink" onClick={handleactiveSlider}>
                    <FaBars />
                </div>
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
                    {/* <ButtonTextOnly link={true} text='Login' fullwidth={false}  /> */}
                    <ButtontextandIcon link={true} text='Login' fullwidth={false} route='#' icon={<FaUserAlt />} />
                    <div className={`${lightmode ? ('lightmodediv') : ('darkmode')}`}>
                        <div className={`${lightmode ? ('innerlightmodecircle') : ('innerdarkmodecircle')}`} onClick={handlelightmodechange}>

                        </div>
                    </div>
                </div>
            </section>
            <div className="overlaysidebar"></div>
            <div className="sidebar">
                <div><a href="#"><span><FaHome /></span>Home</a></div>
            </div>
        </>
    )
}

export default Header_comp