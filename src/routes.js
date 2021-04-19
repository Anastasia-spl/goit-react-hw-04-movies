import { lazy } from 'react';

const HomePage = lazy(() => import('./pages/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./pages/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));

const pagesRoutes = [
{
  path: '/',
  label: 'Home',
  component: HomePage,
  exact: true,
},
{
  path: '/movies',
  label: 'Movies',
  component: MoviesPage,
  exact: true,

},
{
  path: '/movies/:movieId',
  component: MovieDetailsPage,
},
 
]

export { pagesRoutes };