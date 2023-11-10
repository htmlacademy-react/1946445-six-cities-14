import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Offers } from '../../types/offers';
import { Reviews } from '../../types/reviews';
import NotFound from '../not-found/not-found';
import { Header } from '../../components/header/header';
import { setRatingWidth } from '../../utils/utils';
import Map from '../../components/map/map';
import { ReviewsList } from '../../components/reviews-list/reviews-list';
import { OffersList } from '../../components/offers-list/offers-list';

type OfferProps = {
  offers: Offers[];
  reviews: Reviews[];
};

function Offer({ offers, reviews }: OfferProps) {
  const { offerId } = useParams();
  const currentOffer = offers.find((item) => item.id === Number(offerId));
  const activeCity = currentOffer?.city;
  const nearOffers = useMemo<Offers[]>(() => {
    if (!currentOffer) {
      return [];
    }
    const nearPlace: Offers[] = [];
    offers.forEach((item) => {
      if (nearPlace.length < 3 && item.city.name === currentOffer.city.name) {
        nearPlace.push(item);
      }
    });
    return nearPlace;
  }, [offers, currentOffer]);
  if (!currentOffer) {
    return <NotFound />;
  }
  const {
    images,
    goods,
    isPremium,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    description,
    title,
    host,
  }: Offers = currentOffer;
  return (
    <div className="page">
      <Helmet>
        <title>6 Cities. Offer</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((img) => (
                <div key={img} className="offer__image-wrapper">
                  <img className="offer__image" src={img} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{title}</h1>
                <button className="offer-card__bookmark-button button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: setRatingWidth(rating) }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">
                  {rating}
                </span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((feature) => (
                    <li key={feature} className="offer__inside-item">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host {title}</h2>
                <div className="offer__host-user user">
                  <div
                    className={`offer__avatar-wrapper user__avatar-wrapper ${
                      host.isPro && 'offer__avatar-wrapper--pro'
                    }`}
                  >
                    <img
                      className="offer__avatar user__avatar"
                      src={host.avatarUrl}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{host.name}</span>
                  <span className="offer__user-status">
                    {host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">{description}</p>
                </div>
              </div>
              <ReviewsList reviews={reviews} />
            </div>
          </div>
          <Map
            cardPageType="near-places"
            city={activeCity}
            offers={nearOffers}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <OffersList cardPageType="near-places" offers={nearOffers} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
