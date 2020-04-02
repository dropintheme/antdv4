import React from 'react';
import { Layout } from 'antd';
import 'antd/es/layout/style/css';
import { FlexContainer, FlexAutoGrow } from '../../index';

import Logo from '../logo';
const { Header } = Layout;

const SiteHeader = ({ logo, children, ...props }) => {
    return (
        <Header>
            <FlexContainer>
                <Logo {...logo}></Logo>
                <FlexAutoGrow justify="flex-end" align="center">
                    {children}
                </FlexAutoGrow>
            </FlexContainer>
        </Header>
    );
};

export default SiteHeader;
