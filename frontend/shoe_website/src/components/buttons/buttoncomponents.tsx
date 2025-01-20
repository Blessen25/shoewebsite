import React from "react";
import './buttoncomponents.css'
import { Link } from "react-router-dom";
import { ButtonTextOnlyProps } from "../../models/interface";

export const ButtonTextOnly: React.FC<ButtonTextOnlyProps> = (props) => {
    return (
        <>
            {props.link ? (
                <>
                    <Link to={'#'} className={`Buttondiv ${props.stylecstm} ${props.fullwidth ? ('w-100') : ('')}`}>
                        {props.text}
                    </Link>
                </>
            ) : (
                <>
                    <a href="#" className="Buttondiv">
                        {props.text}
                    </a>
                </>
            )}
        </>
    )
}

