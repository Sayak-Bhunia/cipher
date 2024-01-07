import React, { useState, useEffect } from 'react';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

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
      <div class="flex flex-col items-left lg:flex-row lg:items-start justify-center">
        <div class="text-center lg:mr-6">
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
