import React from 'react';
import Head from 'next/head';
import Header from '../src/components/header';
import BusinessGrowth from '../src/components/businessGrowth';
import Video from '../src/components/video';
import Testimonials from '../src/components/testimonials';
import Contact from '../src/components/contact';
import Footer from '../src/components/footer';
import Copyright from '../src/components/copyright'

const Landing = () => {
  return (
    <div>
      <Head>
        <title>Puntos Guan</title>
      </Head>
      <Header />
      <BusinessGrowth />
      <Video />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Landing;
