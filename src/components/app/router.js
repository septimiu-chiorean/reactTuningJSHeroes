import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';
import Loading from '../../components/loading/loading';

const Home = lazy(() => import('../../pages/home'  /* webpackChunkName: "home" */));
const Add = lazy(() => import('../../pages/add' /* webpackChunkName: "add" */));
const Login = lazy(() => import('../../pages/login' /* webpackChunkName: "login" */));
const User = lazy(() => import('../../pages/user' /* webpackChunkName: "user" */));
const Dashboard = lazy(() => import('../../pages/dashboard' /* webpackChunkName: "dashboard" */));

const AppRouter = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Home path="/" />
      <Add path="/add" />
      <Login path="/login" />
      <User path="/:username" />
      <Dashboard path="/dashboard" />
    </Router>
  </Suspense>
);

export default AppRouter;
