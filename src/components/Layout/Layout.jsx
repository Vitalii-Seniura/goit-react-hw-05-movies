import { Suspense } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => {
  return (
    // <container>
    <>
      <header>
        <nav className={css.header_container}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
    // </container>
  );
};

export default Layout;
