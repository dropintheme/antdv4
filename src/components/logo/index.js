import React from 'react';
import { Link} from "react-router-dom";
import './styles/logo.css';


const Logo = (props) => {
    return <Link to="/" className="logo text-center">
            {props.fullScreen ? <span className="logo-lg">
                <img src={props.fullScreen} alt="" height="40" />
            </span> : ''}
            {props.smallScreen ? <span className="logo-sm">
                <img src={props.smallScreen} alt="" height="40" />
        </span> : ''}
        </Link>

}

export default Logo;