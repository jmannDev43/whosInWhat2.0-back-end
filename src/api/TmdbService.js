import TmdbRepository from './TmdbRepository';

export default class TmdbService {
  static search(searchString) {
    return TmdbRepository.search(searchString);
  }
  static getPersonCredits(id) {
    return TmdbRepository.getPersonCredits(id);
  }
  static getMovieCredits(id) {
    return TmdbRepository.getMovieCredits(id);
  }
  static getTvCredits(id) {
    return TmdbRepository.getTvCredits(id);
  }
};
