import React from 'react';
import Header from '../Header/Header';

const Page = ({ children }) =>
  <section className="Page">
    <Header />
    {children}
  </section>;

export default Page;