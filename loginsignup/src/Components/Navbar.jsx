import {Link} from 'react-router-dom';

export function Navbar() {
  return (
    <>
    <Link to ="/">Home
    <button>Home</button>
    </Link>
    <Link to="/Login">
      <button>Login</button>
    </Link>
    <Link to="/Signup">
      <button>Signup</button>
    </Link>    
    </>
  );
}