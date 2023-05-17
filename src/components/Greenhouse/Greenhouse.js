import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
    const { themeName } = useTheme();
    let content = null
    if (themeName === 'day') {
      content = <img
      className='greenhouse-img'
          src={dayImage}
          alt='greenhouse'
          />
    } else {
      content = <img
      className='greenhouse-img'
          src={nightImage}
          alt='greenhouse'
          />
    }

    return (
    <section>
      {content}
      {/* {if (themeName === 'day') {
        <img
        className='greenhouse-img'
            src={dayImage}
            alt='greenhouse'
            />
      } else {
        <img
        className='greenhouse-img'
            src={nightImage}
            alt='greenhouse'
            />
      }} */}

      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
