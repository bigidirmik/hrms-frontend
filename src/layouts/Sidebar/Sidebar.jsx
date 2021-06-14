import React from "react";
import { Menu } from 'semantic-ui-react';
import CityList from "../../pages/CityList";

export default function Sidebar() {
  return (
    <div>
      <Menu pointing vertical>
        <Menu.Item
          name='home'
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>

      <CityList/>
      
    </div>
  );
}
