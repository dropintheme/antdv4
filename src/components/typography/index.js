import React from 'react';
import classNames from 'classnames';
import 'antd/es/typography/style/css';
import { Typography } from 'antd';

export const Text = props => {
    const classes = ['ant-custom-typography'];
    if (props.size) {
        classes.push(`ant-custom-typography-size-${props.size}`);
    }
    if (props.strong) {
        classes.push(`ant-custom-typography-weight-strong`);
    }
    return <div className={classNames(classes)}>{props.children}</div>;
};

// export {Text};
export default Typography;
