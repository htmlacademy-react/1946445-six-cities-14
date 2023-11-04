import { Link } from 'react-router-dom';
import { isUserAuthorized, AppRoute } from '../../utils/consts';
import Logo from '../../components/logo/logo';

type HeaderProps = {
  notAuthorized: boolean;
};

function Header({ notAuthorized }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {notAuthorized ? (
            false
          ) : (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  {isUserAuthorized ? (
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Favorites}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                      <span className="header__favorite-count">3</span>
                    </Link>
                  ) : (
                    <Link
                      className="header__nav-link header__nav-link--profile"
                      to={AppRoute.Login}
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  )}
                </li>
                {isUserAuthorized ? (
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#">
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                ) : (
                  false
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export {Header};
