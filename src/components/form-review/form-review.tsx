import { useState, ChangeEvent, Fragment } from 'react';
import { MIN_REVIEW_LENGTH, MAX_REVIEW_LENGTH } from '../../utils/consts';

const stars = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly',
};

function FormReview() {
  const [rating, setRating] = useState('');
  const [review, setReview] = useState('');
  const isValid =
    review.length >= MIN_REVIEW_LENGTH &&
    review.length <= MAX_REVIEW_LENGTH &&
    rating !== '';
  const handleTextAreaChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };
  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value);
  };
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(stars)
          .reverse()
          .map(([number, title]) => (
            <Fragment key={number}>
              <input
                className="form__rating-input visually-hidden"
                checked={rating === number}
                name="rating"
                value={number}
                id={`${number}-stars`}
                type="radio"
                onChange={handleInputChange}
              />
              <label
                htmlFor={`${number}-stars`}
                className="reviews__rating-label form__rating-label"
                title={title}
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={review}
        id="review"
        name="review"
        onChange={handleTextAreaChange}
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{' '}
          <b className="reviews__text-amount">{MIN_REVIEW_LENGTH} characters</b>
          .
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export { FormReview };
