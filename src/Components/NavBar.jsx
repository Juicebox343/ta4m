import { NavLink } from 'react-router-dom';

const NavBar = () => {
 
  return (
    <nav className='header-bottom'>
      <ul>
        <div className='orange-bar x1 hide-me'>67</div>
        <li>
          <NavLink to='home' className='page-title' activeClassName='current-page'>Archives</NavLink>
        </li>
        <div className='orange-bar x1'>72</div>
        <li>
          <NavLink to='/podcasts' className='page-title' activeClassName='current-page'>Podcast</NavLink>
        </li>
        <div className='orange-bar x1'>47</div>
        <li>
          <NavLink to='/articles' className='page-title' activeClassName='current-page'>Articles</NavLink>
        </li>
        <div className='orange-bar x1'>01</div>
        <li>
          <NavLink to='/about' className='page-title' activeClassName='current-page'>About</NavLink>
        </li>
        <div className='orange-bar x9'>13</div>
      </ul>
    </nav>
  );
};

export default NavBar;
