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
      path: '/MyProfile',
      text: 'My profile',
    },
    {
      id: 4,
      path: '/Dragons',
      text: 'Dragons',
    },
  ];

  return (
    <nav>
      <img className="logo" src={logo} alt="logo-planet" />
      <h1> Space Travellers&apos; Hub </h1>
      <ul className="ul-links">
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
