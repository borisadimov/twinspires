import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Socials.scss'
import Cookie from 'js-cookie'

@CSSModules(styles)
export class Socials extends React.Component {


  state = {
    camid: Cookie.get('CAMID') || ''
  };

  render () {
    return (
      <div styleName='Socials'>
        <div styleName='social-email'>
          <a href={'mailto:?Subject=Free%20%2410%20Bet%20at%20TwinSpires%21&Body=Use%20my%20invitation%20code%2C%20' + ''+ this.state.camid+ '%2C%20when%20you%20register%20for%20a%20new%20TwinSpires%20wagering%20account%20and%20get%20%2410%20FREE%20when%20you%20place%20your%20first%20bet.%20Redeem%20it%20at%3A%20https%3A//www.twinspires.com/account/register%3Fpromo_code%3D' + ''+this.state.camid}></a>
          share via email
        </div>
        <div styleName='social-facebook'>
          <a target="_blank" href={`http://www.facebook.com/sharer/sharer.php?u=https%3A//www.twinspires.com/account-create-raf%3Fpromo_code%3D${this.state.camid}`}></a>
          share on facebook
        </div>
        <div styleName='social-twitter'>
          <a href={`https://twitter.com/share?url=https%3A//www.twinspires.com/account/register%3Fpromo_code%3D${this.state.camid}&text=I%20love%20@TwinSpires%21%20Sign%20up%20with%20my%20invitation%20code%20and%20get%20a%20FREE%20%2410%20BET%21`}></a>
          share on twitter
        </div>
      </div>
    )
  }
}


export default Socials
