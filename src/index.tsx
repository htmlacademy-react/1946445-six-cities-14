import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CARDS_COUNT } from './utils/consts';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App offersCount={CARDS_COUNT} offers={offers} reviews={reviews} />
  </React.StrictMode>
);
