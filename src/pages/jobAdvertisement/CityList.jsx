import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../../services/jobAdvertisement/cityService";

export default function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setCities(result.data.data));
  }, []);

  return (
    <div>
      <Dropdown style={{marginRight:"3.5em"}}
        placeholder="Şehir seçiniz"
        selection
        options={cities.map((city) => (
          <Dropdown.Item key={city.id}>{city.cityName}</Dropdown.Item>
        ))}
      ></Dropdown>
    </div>
  );
}
