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
        <hr className="w-25 mt-4 mb-4 border-t-2 border-dashed border-slate-500 mx-auto" />
        <iframe className="rounded-lg border-slate-500 border-2" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6999.268971517835!2d88.38936975383761!3d22.660974471043875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1704791147954!5m2!1sen!2sin" width="320" height="300" allowfullscreen="" loading="lazy"></iframe>
          <div className="mt-4 relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-cyan-400">
            {locationString}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
