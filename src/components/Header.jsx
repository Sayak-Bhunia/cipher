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
    ? `lat: ${currentLocation.latitude}, long: ${currentLocation.longitude}`
    : 'Location not available';

  return (
    <>
      <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div class="text-center mt-4 lg:mr-6">
          <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-cyan-400">
            {formattedTime}
            <span className="text-custom">hshsjsjsjsjssj</span>
            {formattedDate}
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
