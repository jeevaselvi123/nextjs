import navStyles from "../styles/Nav.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/input_control">Input Control</Link>
        </li>
        <li>
          <Link href="/">Go Back</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
