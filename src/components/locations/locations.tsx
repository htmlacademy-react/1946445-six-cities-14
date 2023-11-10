import { Link } from 'react-router-dom';
import { cityLocations } from '../../utils/consts';
import { OfferCity } from '../../types/offers';

type LocationsProps = {
  activeCity: OfferCity['name'];
  onCityClick: (city: OfferCity['name']) => void;
}

function Locations({activeCity, onCityClick}: LocationsProps) {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cityLocations.map((city) => (
            <li key={city} className="locations__item">
              <Link
                to={`?city=${city}`}
                className={`${
                  activeCity === city ? 'tabs__item--active' : ''
                } locations__item-link tabs__item`}
                onCityClick={() => onCityClick(city)}
              >
                <span>{city}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export { Locations };
