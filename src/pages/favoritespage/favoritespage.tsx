import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';
import { Offers, OfferCity } from '../../types/offers';
import { Card } from '../../components/card/card';
import { Header } from '../../components/header/header';
import { AppRoute } from '../../utils/consts';

type FavoritesProps = {
  offers: Offers[];
};

function Favorites({ offers }: FavoritesProps) {
  const favoriteCity = new Set<OfferCity['name']>();
  const favoriteOffers = offers
    .filter((offer) => offer.isFavorite)
    .sort((a, b) => (a.city.name.compareLocale(b.city.name)));
  favoriteOffers.map(({city}) => favoriteCity.add(city.name));
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Array.from(favoriteCity).map((city) => (
                <li key={city} className="favorites__locations-items">
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {favoriteOffers.map((offer) => {
                      if(offer.city.name === city) {
                        return <Card key={offer.id} offer={offer} cardPageType='favorites' size='small' />;
                      }
                      return null;
                    })}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </Link>
      </footer>
    </div>
  );
}

export default Favorites;
