import React from 'react';
import Head from 'next/head';
import Header from '../src/components/header';

const Landing = props => {
  return (
    <div>
      <Head>
        <title>Guan Points</title>
      </Head>
      <Header/>
    </div>
  );
};

export default Landing;
