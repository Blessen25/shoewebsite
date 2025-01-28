import React, { useState } from 'react';
import './header.css'
import { ButtontextandIcon, ButtonTextOnly } from '../buttons/buttoncomponents.tsx';
import { FaBars, FaHome, FaInfoCircle, FaLink, FaShoePrints, FaThLarge, FaUserAlt } from 'react-icons/fa';
import { FaShoelace } from 'react-icons/fa6';

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
            { activeslider ? (
                <>
                <div className="overlaysidebar"></div>
                <div className="sidebar">
                    <div className='sidebardiv'>
                        <a href="/" className='sidebaratag'>
                            <div className="sidebaricon"><FaHome/></div>
                            <p>Home</p>
                        </a>
                    </div>
                    <div className='sidebardiv'>
                        <a href="/" className='sidebaratag'>
                            <div className="sidebaricon"><FaShoePrints/></div>
                            <p>Shoe</p>
                        </a>
                    </div>
                    <div className='sidebardiv'>
                        <a href="/" className='sidebaratag'>
                            <div className="sidebaricon"><FaInfoCircle/></div>
                            <p>About</p>
                        </a>
                    </div>
                    <div className='sidebardiv'>
                        <a href="/" className='sidebaratag'>
                            <div className="sidebaricon"><FaThLarge/></div>
                            <p>Collection</p>
                        </a>
                    </div>

                </div>
                </>
            ) : ('') }
        </>
    )
}

export default Header_comp