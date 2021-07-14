import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function AdminMenuItems() {
    return (
        <Menu inverted>
            <Menu.Item icon="id badge" as={NavLink} to="/candidates"/>
            <Menu.Item icon="handshake" as={NavLink} to="/employers"/>
            <Menu.Item icon="bullhorn" as={NavLink} to="/confirm-job-ads"/>
        </Menu>
    )
}
