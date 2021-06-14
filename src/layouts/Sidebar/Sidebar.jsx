import React from "react";
import { Menu } from 'semantic-ui-react';
import CityList from "../../pages/CityList";
import JobTitleList from "../../pages/JobTitleList";

export default function Sidebar() {
  return (
    <div>
      <Menu vertical>
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

      <br></br>

      <JobTitleList/>
      
    </div>
  );
}
