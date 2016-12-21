import { ratingsUrl } from '../actions/endpoints';

const RatingsPageSize = 30;

const text = (element) => element.text().trim();
const numbers = (v) => v.match(/^([0-9]+)/g);
const count = (v) => (numbers(v) && numbers(v)[0]) || 0;
const followers = (v) => numbers(v)[0] || 0;
const following = (v) => numbers(v)[1] || 0;
const hasPartialPage = (total) => total % RatingsPageSize !== 0;

export const mapProfile = ($, id) => ({
  avatar: $('div.stats img').attr('src'),
  id,
  name: text($('div.stats div.name')),
  counts: {
    reviews: count(text($(`a[href="/${id}/reviews"]`))),
    ratings: count(text($(`a[href="/${id}/ratings"]`))),
    queued: count(text($(`a[href="/${id}/queue"]`))),
    lists: count(text($(`a[href="/${id}/lists"]`))),
    followers: followers(text($(`a[href="/${id}/people"]`))),
    following: following(text($(`a[href="/${id}/people"]`))),
  },
});

export const addRatingPageLinks = (profile) => {
  let pageCount = Math.floor(profile.counts.ratings / RatingsPageSize) + 1;
  pageCount += hasPartialPage(profile.counts.ratings) ? 1 : 0;

  const ratingPageLinks = new Array(pageCount).fill('').map((v, i) => ratingsUrl(profile.id, i));

  return Object.assign({}, profile, { ratingPageLinks });
};
