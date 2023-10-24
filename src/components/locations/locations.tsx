const cityLocations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

function Locations() {
  return (
    <ul className="locations__list tabs__list">
      {cityLocations.map((city) => (
        <li key={city} className="locations__item">
          <a className="locations__item-link tabs__item" href="#">
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Locations;
