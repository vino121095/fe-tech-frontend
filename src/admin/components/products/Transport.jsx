import React from 'react'
import { useState } from 'react';
import '../products/Transport.css'

const Transport = () => {
    const [selectedCity, setSelectedCity] = useState("");
  const cities = ["Coimbatore", "Chennai", "Bangalore", "Mumbai", "Delhi"];

  const handleSearch = () => {
    alert(`You selected: ${selectedCity}`);
    // Add your search logic here
  };
  return (
    <div className="container mt-4">
      <div className="row justify-content-center align-items-center">
        {/* Dropdown Select Input */}
        <div className="col-md-6 mb-3">
          <select
            className='transportSearch'
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            <option value="" disabled>
              Select a city
            </option>
            {cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="col-md-3">
          <button className='transportSearchBtn' onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transport