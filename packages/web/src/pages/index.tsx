import * as React from "react"
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import Home from '../journeys/home';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Helmet title="JMI Alumni Association, Victoria, Australia" />
      <Home />
    </Layout>
  )
}

export default IndexPage
