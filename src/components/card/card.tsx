import { Link } from 'react-router-dom';
import { Offers } from '../../types/offers';
import { AppRoute } from '../../utils/consts';

type CardProps = {
  offer: Offers;
  cardPageType: 'mainPage' | 'favoritePage' | 'offerPage';
  onCardHover?: (id: number | null) => void;
};

function Card({ offer, cardPageType, onCardHover }: CardProps) {
  const pageSettings = {
    mainPage: {
      className: 'cities',
      width: '260',
      height: '200',
    },
    favoritePage: {
      className: 'favorites',
      width: '150',
      height: '110',
    },
    offerPage: {
      className: 'near-places',
      width: '260',
      height: '200',
    },
  };
  function handleMouseEnter() {
    onCardHover?.(offer.id);
  }
  function handleMouseLeave() {
    onCardHover?.(null);
  }
  return (
    <article
      className={`${pageSettings[cardPageType].className}__card place-card`}
      onMouseEnter={() => handleMouseEnter}
      onMouseLeave={() => handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${pageSettings[cardPageType].className}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={`${pageSettings[cardPageType].width}`}
            height={`${pageSettings[cardPageType].height}`}
            alt={offer.title}
          />
        </Link>
      </div>
      <div
        className={`${
          cardPageType === 'favoritePage' ? 'favorites__card-info' : ''
        } place-card__info`}
      >
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${
              offer.isFavorite && 'place-card__bookmark-button--active'
            } button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              style={{ width: '18px', height: '19px' }}
            >
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export { Card };
