/*
* Example to apply query filters
function applyQueryFilters(q, { category, city, price, sort }) {
  if (category) {
    q = query(q, where('category', '==', category));
  }
  if (city) {
    q = query(q, where('city', '==', city));
  }
  if (price) {
    q = query(q, where('price', '==', price.length));
  }
  if (sort === 'Rating' || !sort) {
    q = query(q, orderBy('avgRating', 'desc'));
  } else if (sort === 'Review') {
    q = query(q, orderBy('numRatings', 'desc'));
  }
  return q;
}
*/
