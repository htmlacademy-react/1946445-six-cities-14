import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Locations } from '../../components/locations/locations';
import { OffersList } from '../../components/offers-list/offers-list';
import { Offers, OfferCity } from '../../types/offers';
import { Header } from '../../components/header/header';
import Map from '../../components/map/map';
import { Form } from '../../components/form-sorting/form-sorting';

type MainProps = {
  offers: Offers[];
};

function MainPage({ offers }: MainProps) {
  const [activeCity, setActiveCity] = useState<OfferCity['name']>('Amsterdam');
  const locationActiveCity = offers.find(({ city }) => city.name === activeCity || city.name === 'Amsterdam')
    ?.city as OfferCity;
  function handleCityClick(city: OfferCity['name']) {
    setActiveCity(city);
  }
  const [activeCard, setActiveCard] = useState<Offers | null>(null);
  function handleCardHover(offer: Offers | null) {
    setActiveCard(offer);
  }
  const filteredOffersByCity = offers.filter(
    (offer) => offer.city.name === activeCity
  );
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 Cities</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Locations activeCity={activeCity} onCityClick={handleCityClick} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {activeCity}
              </b>
              <Form />
              <OffersList
                cardPageType="cities"
                offers={filteredOffersByCity}
                onCardHover={handleCardHover}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                cardPageType="cities"
                city={locationActiveCity}
                selectedOffer={activeCard}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
