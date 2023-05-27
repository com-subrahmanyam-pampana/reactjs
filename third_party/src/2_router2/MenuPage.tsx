import { Outlet, Link } from "react-router-dom";

const MenuPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/support">Support</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default MenuPage;