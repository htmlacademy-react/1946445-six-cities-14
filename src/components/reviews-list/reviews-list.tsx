import { Review } from '../review/review';
import { Reviews } from '../../types/reviews';
import { FormReview } from '../form-review/form-review';
import { MAX__REVIEWS_COUNT, isUserAuthorized } from '../../utils/consts';

type ReviewsProps = {
  reviews: Reviews[];
};

function ReviewsList({ reviews }: ReviewsProps) {
  const reviewsToRender = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX__REVIEWS_COUNT);
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {reviewsToRender.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {isUserAuthorized && <FormReview />}
    </section>
  );
}

export { ReviewsList };
