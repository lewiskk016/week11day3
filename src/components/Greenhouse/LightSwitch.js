import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';
import { useState } from 'react';

function LightSwitch() {
  // const [themeName, setThemeName] = useState("day");
  const { themeName, setThemeName } = useTheme();

  const handleClick = e => {
    e.preventDefault();
    if (themeName === 'day') {
      setThemeName('night');
    } else {
      setThemeName('day');
    }
  }

  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on" onClick={handleClick}>DAY</div>
      <div className="off" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;
