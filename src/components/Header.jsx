import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Update time every second
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

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

    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();
  const locationString = currentLocation
    ? `Latitude: ${currentLocation.latitude}, Longitude: ${currentLocation.longitude}`
    : 'Location not available';

  return (
    <>
      <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div class="text-left mt-4 lg:mr-6">
          <div className="text-sm text-cyan-400">
            {formattedTime}
          </div>
        </div>
        <div class="text-left mt-4 lg:mr-6">
          <div className="text-sm text-cyan-400">
            {formattedDate}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
