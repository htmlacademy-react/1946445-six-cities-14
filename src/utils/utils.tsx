function setRatingWidth(rating: number): string {
  const maxStars = 5;
  return `${(rating * 100) / maxStars}%`;
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-Us', {
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));
}

export { setRatingWidth, formatDate };
