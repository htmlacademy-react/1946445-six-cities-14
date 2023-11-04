import { Helmet } from 'react-helmet-async';
import { Locations } from '../../components/locations/locations';
import { OffersList } from '../../components/offers-list/offers-list';
import { Offers } from '../../types/offers';
import {Header} from '../../components/header/header';

type MainProps = {
  offers: Offers[];
};

function MainPage({ offers}: MainProps) {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations />
        <div className="cities">
          <div className="cities__places-container container">
            <OffersList offers={offers} />
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
