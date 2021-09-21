/* 
import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';
import { NavLink } from 'react-router-dom'

const Button = () => {
    const className =[props.className]
    if(props.isPrimary) className.push["btn-primary"]
    if(props.isLarge) className.push["btn-lg"]
    if(props.isSmall) className.push["btn-sm"]
    if(props.isBlock) className.push["btn-block"]
    if(props.hasShadow) className.push["btn-shadow"]

    const onClick =() => {
        if(props.onClick) props.onClick()
    }

    if(props.type === "link"){
        if(props.isExternal){
            return(
                <a href={props.href} className={className.join} style={props.style} target={props.target === "_blank" ?"_blank":undefined} rel={props.target === "_blank"?"noopener noreferrer":undefined}>{props.children}></a>
            )
        }else{

        }
    }
    return(
        <div className=""></div>
        );
};

Button.propTypes ={
    type: propTypes.oneOf(["button", "link"]),
    onClick: propTypes.func,
    target: propTypes.string,
    href: propTypes.string,
    className: propTypes.string,
    isDisabled: propTypes.bool,
    isLoading: propTypes.bool,
    isSmall: propTypes.bool,
    isLarge: propTypes.bool,
    isBlock: propTypes.bool,
    isExternal: propTypes.bool,
    hasShadow: propTypes.bool
    
}
export default button;

*/