import React from 'react';
import { Input } from 'antd';
import 'antd/es/input/style/css';
import classNames from 'classnames';

const { TextArea } = Input;

const InputLabel = (props) => {
    const {label, helper, className} = props;
    const classes = ['ant-custom-block-label'];

    if(className){
        classes.push(className);
    }

    return <div className={classNames(classes)}>
        {label && <div className="ant-custom-input-label">{label}</div>}
        {props.children}
        {helper && <div className="ant-custom-input-helper">{helper}</div>}
    </div>
}

export {InputLabel, TextArea};
export default Input;

