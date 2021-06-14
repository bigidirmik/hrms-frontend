import React, { useState, useEffect } from "react";
import { Dropdown } from 'semantic-ui-react'
import CityService from '../services/cityService';

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(()=>{
      let cityService = new CityService()
      cityService.getCities().then(result=>setCities(result.data.data))
  })
  
  return (
    <div>
      <Dropdown placeholder='Şehir seçiniz' search selection options={cities.map((city) => <p>{city.cityName}</p>)} />
    </div>
  );
}
