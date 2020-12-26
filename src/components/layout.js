import React from 'react';
import Header from './header'
import Footer from './footer'
import '../styles/index.scss'

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main className="container">
      {props.children}
      </main>
      <Footer/>
    </>
  )
}


export default Layout