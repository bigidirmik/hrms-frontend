import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function CityList() {
  const [cities, setcities] = useState([]);

  useEffect(() => {
    let cityService = new CityService();
    cityService.getCities().then((result) => setcities(result.data.data));
  });

  return (
    <div>
      <Dropdown
        placeholder="Şehir seçiniz"
        selection
        options={cities.map((city) => (
          <option key={city.id}>
            {city.cityName}
          </option>
        ))}/>
    </div>
  );
}
