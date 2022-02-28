import { NavLink } from 'react-router-dom';
import logo from '../assets/images/planet.png';
import '../style/NavBar.css';

const NavBar = () => {
  const Links = [
    {
      id: 1,
      path: '/',
      text: 'Rockets',
    },
    {
      id: 2,
      path: '/Missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/Dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/MyProfile',
      text: 'My profile',
    },
  ];

  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo-planet" />
      <div className="navbar-title"><h1 className="title"> Space Travellers&apos; Hub </h1></div>
      <ul className="menu">
        {Links.map((link) => (
          <li key={link.id} className="li-links">
            <NavLink to={link.path} className="links" activeclassname="active-link">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
