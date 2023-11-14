import { Offers } from '../../types/offers';
import { Card } from '../card/card';
import { CardPageTypes } from '../../types/pagetypes';

type OffersListsProps = {
  offers: Offers[];
  cardPageType: CardPageTypes;
  onCardHover?: (offer: Offers | null) => void;
};

function OffersList({ offers, onCardHover, cardPageType }: OffersListsProps) {
  return (
    <div
      className={`${cardPageType}__places-list ${
        cardPageType === 'cities' ? 'tabs__content' : ''
      } places__list`}
    >
      {offers.map((offer) => (
        <Card
          cardPageType={cardPageType}
          offer={offer}
          key={offer.id}
          onCardHover={onCardHover}
        />
      ))}
    </div>
  );
}

export { OffersList };
