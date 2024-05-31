import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/animals"}>animals</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/User"}>User</NavLink>
      <NavLink to={"/cars"}>cars</NavLink>
      <NavLink to={"/celebrity"}>celebrities</NavLink>


      
    </header>
  );
}
