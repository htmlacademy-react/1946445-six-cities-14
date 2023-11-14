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

const MAX__REVIEWS_COUNT = 10;

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

const checkAuthorizationStatus = (status: AuthorizationStatus): boolean =>
  status === AuthorizationStatus.Auth;

const isUserAuthorized = checkAuthorizationStatus(AuthorizationStatus.Auth);

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {
  AppRoute,
  AuthorizationStatus,
  cityLocations,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH,
  isUserAuthorized,
  URL_MARKER_DEFAULT,
  URL_MARKER_CURRENT,
  MAX__REVIEWS_COUNT,
};
