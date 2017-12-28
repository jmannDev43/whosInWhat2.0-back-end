import MovieController from './TmdbController';

export default router => {
  MovieController.ROUTES.forEach(route => {
    console.log('route', route);
    router['get'](route.uri, route.method);
  });
};
