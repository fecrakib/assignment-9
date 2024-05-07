import { Link } from 'react-router-dom';

import './Header.css'
const Header = () => {
    return (
        <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">Logo</Link>
          <ul className="nav-links">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/statistic">Statistic</Link></li>
            <li><Link to="/appliedJob">Applied Job</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
    );
};

export default Header;