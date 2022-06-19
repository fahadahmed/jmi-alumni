import React, { useEffect } from "react"
import { Helmet } from 'react-helmet';
import fire, { initializeAppCheck, ReCaptchaV3Provider } from "../config/firebase";
import Layout from '../components/Layout';
import Home from '../journeys/home';

// markup
const IndexPage = () => {
  useEffect(() => {
    initializeAppCheck(fire, {
      provider: new ReCaptchaV3Provider(process.env.JMI_RECAPTCHA_CLIENT_ID)
    })
  })
  return (
    <Layout>
      <Helmet title="JMI Alumni Association, Victoria, Australia" />
      <Home />
    </Layout>
  )
}

export default IndexPage
