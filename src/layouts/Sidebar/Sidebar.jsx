import React from "react";
import { NavLink } from "react-router-dom";
import { Icon, Menu } from 'semantic-ui-react';
import CityList from "../../pages/CityList";
import JobTitleList from "../../pages/JobTitleList";

export default function Sidebar() {

  return (
    <div>
      <Menu vertical>
        
        <Menu.Item as={NavLink} to="/job-advertisement-add" ><strong><Icon name="announcement"/> İş İlanı Ekle</strong></Menu.Item>
      </Menu>

      <CityList/>

      <br></br>

      <JobTitleList/>
      
    </div>
  );
}
