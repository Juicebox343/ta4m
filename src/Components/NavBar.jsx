const NavBar = () => {
  return ( 
    <nav className='header-bottom'>
        <ul>
          <div className='orange-bar x1 hide-me'>67</div>
          <li>
          <input type="radio" name="postFilter" value="archives" id="archives"/>
          <label for="archives" className='page-title'>Archives</label>
          </li>
          <div className='orange-bar x1'>72</div>
          <li>
            <input type="radio" name="postFilter" value="podcast" id="podcast"/>
            <label for="podcast" className='page-title'>Podcast</label>
          </li>
          <div className='orange-bar x1'>47</div>
          <li>
            <input type="radio" name="postFilter" value="articles" id="articles"/>
            <label for="articles" className='page-title'>Articles</label>
          </li>
          <div className='orange-bar x1'>01</div>
          <li>
            <input type="radio" name="postFilter" value="about" id="about"/>
            <label for="about" className='page-title'>About</label>
          </li>
          <div className='orange-bar x9'>13</div>
        </ul>
    </nav>
  );
};

export default NavBar;
