import React from 'react';
import './extra.css'
interface Container_cstmprops{
    child ?: React.ReactNode;
}


export const Container_cstm:React.FC<Container_cstmprops> = (props) => {
    return(
        <div className='container_cstm'>
             {props.child}
        </div>
    )
}

export const Content_cstm:React.FC<Container_cstmprops> = (props) =>{
    return(
        <div className='content_cstm'>
            {props.child}
        </div>
    )
}

