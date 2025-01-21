import React from "react";
import './buttoncomponents.css'
import { Link } from "react-router-dom";
import { ButtontextandIconProps, ButtonTextOnlyProps } from "../../models/interface";

export const ButtonTextOnly: React.FC<ButtonTextOnlyProps> = (props) => {
    return (
        <>
            {props.link ? (
                <>
                    <Link to={props.route ? (props.route) : ('')} className={`Buttondiv ${props.stylecstm} ${props.fullwidth ? ('w-100') : ('')}`}>
                        {props.text}
                    </Link>
                </>
            ) : (
                <>
                    <a href={props.route} className="Buttondiv">
                        {props.text}
                    </a>
                </>
            )}
        </>
    )
}

export const ButtontextandIcon: React.FC<ButtontextandIconProps> = (props) => {
    return (
        <>
            {props.link ? (
                <>
                    <Link to={props.route ? (props.route) : ('')}>
                        {props.icon ? (<span>{props.icon}</span>) : ('')}
                        {props.text}</Link>
                </>
            ) : (
                <>
                    <a href={props.route}>{props.route}</a>
                </>
            )}
        </>
    )
}