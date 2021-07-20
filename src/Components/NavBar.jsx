const NavBar = () => {
  return (
    <nav>
      <div className="header-top">
        <div className="blue-bar x1" />
        <h1>There Are Four Mics</h1>
        <div className="blue-bar x3" />
        <div className="blue-bar x5" />
        <div className="orange-bar x2" />
        <div className="flavor-text-1 x2">
          <span>ESTABLISHING SECURE CONNECTION</span>
          <span>SECURE CONNECTION ENABLED</span>
          <span>
            ...Welcome, &#123;GUEST &#125; to Starfleet Archive Museum
          </span>
          <span>...My name is INDEX, how may I assist you today?</span>
        </div>
        <div className="blue-bar x1" />
      </div>
      <div className="header-bottom">
        <div className="orange-bar x4" />
        <h2 className="page-title">Archives</h2>
        <div className="orange-bar x9" />
      </div>
    </nav>
  );
};

export default NavBar;
