import MovieDB from 'moviedb-promise';

const apiKey = process.env.MOVIE_API_KEY;
const movieDB = new MovieDB(apiKey);

export default class TmdbRepository {
  static async search(searchString) {
    const res = await movieDB.searchMulti({ query: searchString });
    return res;
  }
  static async getPersonCredits(id) {
    const res = await movieDB.personCombinedCredits({ id });
    return res;
  }
  static async getMovieCredits(id) {
    const res = await movieDB.movieCredits({ id });
    return res;
  }
  static async getTvCredits(id) {
    const res = await movieDB.tvCredits({ id });
    return res;
  }
};
