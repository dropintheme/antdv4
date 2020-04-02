import React from 'react';
import { Layout } from 'antd';
import 'antd/es/layout/style/css';
import './style.scss'
const { Content } = Layout;

const Body = (props) => {
    return <Content>
      {props.children}
    </Content>
}

export default Body;

