import * as React from 'react';
import { useSelector } from 'react-redux';
import { useMediaQuery } from '@material-ui/core';
import { MenuItemLink, getResources } from 'react-admin';
import DefaultIcon from '@material-ui/icons/ViewList';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import users from '../pages/users';

const Menu = ({ onMenuClick, logout, dense }) => {
    const isXSmall = useMediaQuery(theme => theme.breakpoints.down('xs'));
    const open = useSelector(state => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);
    return (
        <div>
            <MenuItemLink
                to={'/'}
                primaryText={"Dashboard"}
                leftIcon={<DashboardIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {resources.map(resource => (
                <MenuItemLink
                    key={resource.name}
                    to={`/${resource.name}`}
                    primaryText={
                        (resource.options && resource.options.label) ||
                        resource.name
                    }
                    leftIcon={
                        resource.icon ? <resource.icon /> : <DefaultIcon />
                    }
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                    dense={dense}
                />
            ))}
            <MenuItemLink
                to={'/configuration'}
                primaryText={"Configuration"}
                leftIcon={<SettingsIcon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {isXSmall && logout}
        </div>
    );
};

export default Menu;