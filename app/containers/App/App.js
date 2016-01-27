import React from 'react'
import Cookie from 'js-cookie'
import Header from '../../components/Header/Header'
import Login from '../../components/Login/Login'
import Promo from '../../components/Promo/Promo'
import Socials from '../../components/Socials/Socials'
import CSSModules from 'react-css-modules'
import '../../styles/core.scss'

import styles from './App.scss';



var Cdi = Cdi || {};
Cdi.AppConfig = Cdi.AppConfig || {};
Cdi.AppConfig.WS = {
    CDI_BRIDGE: '',
    CDI_BRIDGE_PROXY: '',
    CDI_CLIENT_IP: '192.168.1.100',
    CDI_JSON_TYPE: 'json',
    PASSWORD: 'Oon2kee6thoh',
    USERNAME: 'cdi_marketing',
    CDI_SAID: '2800',
    PUBLIC_API_KEY: 'e97c4199ad4a4155aced22a3c0c369a6',
    TOTE_CONFIG_URL: 'https://www.twinspires.com/php/fw/php_BRIS_BatchAPI/2.3/Tote/Config'
};
Cdi.Service = Cdi.Service || {};
Cdi.Service.ADW_ACCOUNT_BALANCE = "ADW_ACCOUNT_BALANCE"
Cdi.AppConfig.PATH = {};




@CSSModules(styles)
export default class App extends React.Component {

  state = {
    loggedIn: !!(Cookie.get("ACCT"))
  }


  render() {
    return (
      <div styleName='container'>
        <img styleName='image' src={'https://flywithmemsl.github.io/twinspires/image.jpg'} />
        <img styleName='image-tablet' src={'https://flywithmemsl.github.io/twinspires/image-tablet.jpg'} />
        <img styleName='image-mobile' src={'https://flywithmemsl.github.io/twinspires/image-mobile.jpg'} />
        <Header />
        {
          this.state.loggedIn ?
          <Promo /> : <Login />
        }
      </div>
    );
  }
}
