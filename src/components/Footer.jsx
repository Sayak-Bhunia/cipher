import React, { useState, useEffect } from 'react';

const Footer = () => {
  
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ latitude, longitude });
        },
        error => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  
  const locationString = currentLocation
    ? `lat: ${currentLocation.latitude}, long: ${currentLocation.longitude}`
    : 'Location not available';

  return (
    <>
      <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div class="text-center mt-4 lg:mr-6">
        <hr className="w-25 mt-4 mb-4 border-t-2 border-dashed border-slate-600 mx-auto" />
          <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-cyan-400">
            {locationString}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
