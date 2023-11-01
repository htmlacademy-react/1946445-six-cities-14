const cityLocations = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

const MIN_REVIEW_LENGTH: number = 50;

const MAX_REVIEW_LENGTH: number = 150;

enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {
  AppRoute,
  AuthorizationStatus,
  cityLocations,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
};
