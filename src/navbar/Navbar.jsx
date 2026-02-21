import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="section1">
          <a href="/">
            <img src="/meclislogo.png" alt="Logo" className="logo" />
          </a>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

        <label htmlFor="menu-toggle" className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <label htmlFor="menu-toggle" className="menu-overlay"></label>

        <div className="section2">
          <label htmlFor="menu-toggle" className="close-btn">&times;</label>
          
          <ul>
            <li><a href="#hakkımızda">Hakkımızda</a></li>
            <li><a href="#komiteler">Komiteler</a></li>
            <li><a href="#basvuru">Başvuru</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;