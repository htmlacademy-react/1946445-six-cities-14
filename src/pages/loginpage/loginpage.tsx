import { Helmet } from 'react-helmet-async';
import { FormLogin } from '../../components/form-login/form-login';
import {Header} from '../../components/header/header';

function Login() {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 Cities. Login</title>
      </Helmet>
      <Header notAuthorized />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <FormLogin />
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
