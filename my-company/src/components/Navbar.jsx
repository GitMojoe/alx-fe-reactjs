import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='Navbar' style={{ padding: '10px', backgroundColor: '#000000ff', display: 'flex', flexDirection:'justifyContent' }}>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/About" style={{ marginRight: '10px' }}>About</Link>
      <Link to="/Services" style={{ marginRight: '10px' }}>Services</Link>
      <Link to="/Contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
