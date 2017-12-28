import TmdbService from './TmdbService';

export default class TmdbController {
  static BASE_URI = '/api'
  static ROUTES = [
    { uri: `${TmdbController.BASE_URI}/search`, method: TmdbController.search },
    { uri: `${TmdbController.BASE_URI}/movies/:id`, method: TmdbController.getMovieCredits },
    { uri: `${TmdbController.BASE_URI}/tv/:id`, method: TmdbController.getTvCredits },
    { uri: `${TmdbController.BASE_URI}/person/:id`, method: TmdbController.getPersonCredits },
  ];
  static search(req, res) {
    return TmdbService.search(req.query.q).then(results => {
      res.send(results);
    }).catch(err => {
      res.status(500).json(`something went wrong: ${err}`);
    });
  }
  static getPersonCredits(req, res) {
    console.log('req', req);
    return TmdbService.getPersonCredits(req.params.id).then(results => {
      console.log('results', results);
      res.send(results);
    }).catch(err => {
      console.log('err', err);
      res.status(500).json(`something went wrong: ${err}`);
    });
  }
  static getMovieCredits(req, res) {
    return TmdbService.getMovieCredits(req.params.id).then(results => {
      res.send(results);
    }).catch(err => {
      res.status(500).json(`something went wrong: ${err}`);
    });
  }
  static getTvCredits(req, res) {
    return TmdbService.getTvCredits(req.params.id).then(results => {
      res.send(results);
    }).catch(err => {
      res.status(500).json(`something went wrong: ${err}`);
    });
  }
};
