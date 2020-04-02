import React from 'react';
import Icon from '../icon';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/es/breadcrumb/style/css';
import 'antd/es/icon/style/css';

export const BreadcrumbWithRoutes = props => {
    let breadCrumbItems = [];
    if (props.routes) {
        breadCrumbItems = props.routes.map(route => {
            const icon = route.icon ? <Icon type={route.icon} /> : null;
            const name = route.name ? <span>{route.name}</span> : null;
            const link = route.link ? (
                <Link to={route.link}>
                    {icon}
                    {name}
                </Link>
            ) : (
                <React.Fragment>
                    {icon}
                    {name}
                </React.Fragment>
            );
            if (icon || name) {
                return <Breadcrumb.Item key={name}>{link}</Breadcrumb.Item>;
            }
            return null;
        });
    }
    return <Breadcrumb>{breadCrumbItems}</Breadcrumb>;
};

export default Breadcrumb;
