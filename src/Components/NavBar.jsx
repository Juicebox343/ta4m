import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className='header-bottom'>
      <ul>
        <div className='orange-bar x1 hide-me'>67</div>
        <li>
          <NavLink to='archives'>
            <input
              type='radio'
              name='postFilter'
              value='archives'
              id='archives'
            />
            <label htmlFor='archives' className='page-title'>
              Archives
            </label>
          </NavLink>
        </li>
        <div className='orange-bar x1'>72</div>
        <li>
          <NavLink to='/podcasts'>
            <input
              type='radio'
              name='postFilter'
              value='podcast'
              id='podcast'
            />
            <label htmlFor='podcast' className='page-title'>
              Podcast
            </label>
          </NavLink>
        </li>
        <div className='orange-bar x1'>47</div>
        <li>
          <NavLink to='/articles'>
            <input
              type='radio'
              name='postFilter'
              value='articles'
              id='articles'
            />
            <label htmlFor='articles' className='page-title'>
              Articles
            </label>
          </NavLink>
        </li>
        <div className='orange-bar x1'>01</div>
        <li>
          <NavLink to='/about'>
            <input type='radio' name='postFilter' value='about' id='about' />
            <label htmlFor='about' className='page-title'>
              About
            </label>
          </NavLink>
        </li>
        <div className='orange-bar x9'>13</div>
      </ul>
    </nav>
  );
};

export default NavBar;
