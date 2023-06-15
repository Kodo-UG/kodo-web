import React, { Fragment } from 'react'
import Slidder from './Slidder'
import About from './About'
import Features from './Features'
import Events from './Events'

const HomePage = () => {
  return (
    <Fragment>
       <Slidder />
       <About />
       <Features />
       <Events />
    </Fragment>
  )
}

export default HomePage