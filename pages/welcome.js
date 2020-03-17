import React from 'react';
import { useFetchUser } from '../lib/user';
import HomePage from '../components/HomePage';
import MainPage from '../components/MainPage';

const IndexPage = () => {
  const { user, loading } = useFetchUser()
  return user ? <MainPage /> : <HomePage />;

};



export default IndexPage;
