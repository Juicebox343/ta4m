import { NavLink } from 'react-router-dom';
const TitleBar = () => {
  return (
    <header className='header-top'>
      <div>
        <div className='blue-bar x1'>11</div>
        <h1>
          <NavLink
            to='/home'
            style={{ font: 'inherit', textDecoration: 'inherit' }}
          >
            There Are Four Mics
          </NavLink>
        </h1>
        <div className='blue-bar x3'>28</div>
        <div className='blue-bar x5 hide-me'>61</div>
        <div className='orange-bar x2'>98</div>
        <div className='flavor-text-1 x2'>
          <span>ESTABLISHING SECURE CONNECTION</span>
          <span>SECURE CONNECTION ENABLED</span>
          <span>
            ...Welcome, &#123;GUEST &#125; to Starfleet Archive Museum
          </span>
          <span>...My name is INDEX, how may I assist you today?</span>
        </div>
        <div className='blue-bar x1'>71</div>
      </div>
      <div className='narrow-bar'>
        <div className='blue-bar x8'></div>
        <div className='orange-bar x2'></div>
        <div className='blue-bar x4'></div>
      </div>
    </header>
  );
};

export default TitleBar;
