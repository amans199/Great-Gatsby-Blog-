import React from 'react';
import Layout from '../components/layout'
import Helmet from '../components/head'

const PageNotFound = () => {
  return (
    <Layout>
      <Helmet title="Page not found" />
      <h1>
      Page not found
      </h1>
    </Layout>
  )
}


export default PageNotFound