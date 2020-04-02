import React from 'react';
import { Layout } from 'antd';
import 'antd/es/layout/style/css';
import './footer.scss';
const { Footer } = Layout;


const SiteFooter = (props) => {
    return <Footer className="fixed-footer">
        {props.children}
    </Footer>
}

export default SiteFooter;

