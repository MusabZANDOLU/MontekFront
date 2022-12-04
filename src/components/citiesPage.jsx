/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { BASE_URL } from "../base";
import { MultiSelect } from "react-multi-select-component";

const citiesPage = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState();
  const [selectedDays, setSelectedDays] = useState([]);

  const options = [
    { label: "Pazartesi", value: "monday" },
    { label: "Salı", value: "tuesday" },
    { label: "Çarşamba", value: "wednesday" },
    { label: "Perşembe", value: "thursday" },
    { label: "Cuma", value: "Friday" },
    { label: "Cumartesi", value: "saturday" },
    { label: "Pazar", value: "sunday" },
  ];

  useEffect(() => {
    getCities();
  }, []);

  const getCities = async () => {
    const response = await axios.get(`${BASE_URL}/getOffer/foldingWindow`);
    setCities(response.data);
  };


  return (
    <div className="citiesPageAll">
      <div className="selectCover">
        <div className="citiesPageTitleUp">Montaj Yaptırmak İstediğiniz İl</div>


        <select
          className="selectClass"
          onChange={e => setSelectedCity(e.target.value)}
        >
          {cities.map(allcities => (
            <option
              key={allcities.id}
              value={allcities.plate}
            >
              {allcities.name.toLocaleUpperCase()}
            </option>
          ))}
        </select>


        <div className="citiesPageTitleDown">
          Montaj Yaptırmak İstediğiniz İlçe
        </div>
        <select
          className="selectClass"
          disabled={!selectedCity}
        >
          {selectedCity && cities.find((e) => e.plate === selectedCity).counties.map((country) =>
            <option
              key={country}
              value={country}
            >
              {country.toLocaleUpperCase()}
            </option>
          )}
        </select>

        <div className="multiSelectClass">
          <h1>Müsait Günlerinizi Seçiniz</h1>
          <MultiSelect
            options={options}
            value={selectedDays}
            onChange={setSelectedDays}
            labelledBy="Select"
          />
        </div>
      </div>
    </div>
  );
};

export default citiesPage;
