import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [batteryStatus, setBatteryStatus] = useState(null);
  const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

  useEffect(() => {
    // Battery status
    navigator.getBattery().then((battery) => {
      setBatteryStatus(battery.level * 100);
      battery.addEventListener('levelchange', () => {
        setBatteryStatus(battery.level * 100);
      });
    });

    // Online/offline status
    const handleOnlineStatusChange = () => {
      setOnlineStatus(navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  useEffect(() => {
    const timeIntervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timeIntervalId);
    };
  }, []);

  const formattedTime = currentTime.toLocaleTimeString();
  const formattedDate = currentTime.toLocaleDateString();

  return (
    <>
      <div className="flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div className="text-center lg:mr-6">
          <div className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-500">
            {formattedTime}
            <span className="text-custom">hshsjsjsjsjssj</span>
            {formattedDate}
            <br />
            {batteryStatus !== null && (
              <span>power: {batteryStatus.toFixed(2)}%</span>
            )}
            <span className="text-custom">hshsjsjsjsjssj</span>
            <span>{onlineStatus ? 'Online' : 'Offline'}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
