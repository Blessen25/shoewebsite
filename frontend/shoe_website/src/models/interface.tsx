import { CSSProperties } from 'react';

export interface ButtonTextOnlyProps {
    text: string;
    link: boolean;
    fullwidth: boolean;
    route?: string;
    stylecstm?: CSSProperties;

}

export interface ButtontextandIconProps {
    text: string;
    link: boolean;
    fullwidth: boolean;
    icon?: any;
    route?: string;
    stylecstm?: CSSProperties;
}

export interface HeaderProps{
    transparent : boolean;
}