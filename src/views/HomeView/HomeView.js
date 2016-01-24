import React from 'react'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import Promo from '../../components/Promo/Promo'
import CSSModules from 'react-css-modules'
import styles from './HomeView.scss'
import Image from './image.jpg'

@CSSModules(styles)
export class HomeView extends React.Component {

  render () {
    return (
      <div styleName='container'>
        <img styleName='image' src={'./' + Image} />
        <Header />
        <Login />
        <Promo value='CAMID'/>
      </div>
    )
  }

}

export default HomeView
