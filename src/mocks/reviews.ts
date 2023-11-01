import { Reviews } from '../types/reviews';

const reviews: Reviews[] = [
  {
    id: 1,
    user: {
      id: 13,
      isPro: false,
      name: 'Zak',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/4.jpg',
    },
    rating: 2,
    comment:
      'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2023-09-30T09:23:20.316Z',
  },
  {
    id: 2,
    user: {
      id: 15,
      isPro: false,
      name: 'Kendall',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/6.jpg',
    },
    rating: 3,
    comment:
      'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2023-09-30T09:23:20.316Z',
  },
  {
    id: 3,
    user: {
      id: 14,
      isPro: true,
      name: 'Corey',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/5.jpg',
    },
    rating: 4,
    comment:
      'Beautiful space, fantastic location and atmosphere, really a wonderful place to spend a few days. Will be back.',
    date: '2023-09-09T09:23:20.316Z',
  },
  {
    id: 4,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://14.react.pages.academy/static/avatar/7.jpg',
    },
    rating: 4,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2023-09-25T09:23:20.316Z',
  },
];

export default reviews;
