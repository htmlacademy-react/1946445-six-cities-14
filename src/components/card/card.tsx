import { Link } from 'react-router-dom';
import { Offers } from '../../types/offers';
import { AppRoute } from '../../utils/consts';
import { setRatingWidth } from '../../utils/utils';
import { CardPageTypes } from '../../types/pagetypes';

type ImageSize = 'small' | 'large';

const imgSize: Record<ImageSize, { width: string; height: string }> = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
};

type CardProps = {
  offer: Offers;
  cardPageType: CardPageTypes;
  onCardHover?: (offer: Offers | null) => void;
  size?: ImageSize;
};

function Card({ offer, cardPageType, onCardHover, size = 'large' }: CardProps) {
  function handleMouseEnter() {
    onCardHover?.(offer);
  }
  function handleMouseLeave() {
    onCardHover?.(null);
  }
  return (
    <article
      className={`${cardPageType}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={`${cardPageType}__image-wrapper place-card__image-wrapper`}
      >
        <Link to={`${AppRoute.Offer}/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            {...imgSize[size]}
            alt={offer.title}
          />
        </Link>
      </div>
      <div
        className={`${
          cardPageType === 'favorites' ? 'favorites__card-info' : ''
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
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: setRatingWidth(offer.rating) }}></span>
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
