import React from 'react'
import App from 'next/app'

class LandingApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default LandingApp