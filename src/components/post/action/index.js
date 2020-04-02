import React from 'react';
import Icon from '../../icon';
import { Tooltip } from 'antd';
import 'antd/es/icon/style/css';
import 'antd/es/tooltip/style/css';

const Action = ({ key, icon, theme, onClick, label, style, disabled }) => {
    return <span key={key}>
        <Tooltip title={label}>
            <Icon
                type={icon}
                theme={theme}
                onClick={onClick}
                disabled={disabled}
            />
        </Tooltip>
        <span style={style}>{label}</span>
    </span>
}

export default Action;