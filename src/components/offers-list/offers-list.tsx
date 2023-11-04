import { Offers } from '../../types/offers';
import { Card } from '../card/card';
import { Form } from '../form-sorting/form-sorting';

type OffersListsProps = {
  offers: Offers[];
};

function OffersList({ offers }: OffersListsProps) {
  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">
        {offers.length} places to stay in Amsterdam
      </b>
      <Form />
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <Card cardPageType="mainPage" offer={offer} key={offer.id} />
        ))}
      </div>
    </section>
  );
}

export { OffersList };
