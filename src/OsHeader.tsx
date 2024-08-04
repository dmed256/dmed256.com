import * as React from 'react';
import moment from 'moment';
import BatteryCharging50Icon from '@mui/icons-material/BatteryCharging50';
import HexagonIcon from '@mui/icons-material/Hexagon';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';

export const OsHeader = () => {
  const [dateStr, setDateStr] = React.useState('');

  React.useEffect(() => {
    const secondsTimer = setInterval(() => {
      setDateStr(moment().format('ddd MMM D  LT'));
    }, 500);
    return () => clearInterval(secondsTimer);
  }, []);

  return (
    <div className="flex flex-row items-center py-2 px-4 backdrop-blur-lg bg-neutral-400/40 text-white text-sm">
      {/* Left side */}
      <div className="flex flex-row items-center gap-4 drop-shadow-md">
        <HexagonIcon className="!text-[20px]" />
        <a href="https://dmed256.com">
          <b>dmed256</b>
        </a>
        <a
          href="mailto:dmed256@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>
        <a
          href="https://github.com/dmed256"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/dmed256"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://x.com/dmed256"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
      <div className="flex-1 min-w-[100px]" />
      {/* Right side */}
      <div className="flex flex-row items-center gap-4 !text-[18px]">
        <NightlightRoundIcon fontSize="inherit" className="-rotate-45" />
        <VolumeOffIcon fontSize="inherit" />
        <WifiOffIcon fontSize="inherit" />
        <BatteryCharging50Icon className="!text rotate-90" />
        <span className="text-[13px] whitespace-pre">{dateStr}</span>
      </div>
    </div>
  );
};
