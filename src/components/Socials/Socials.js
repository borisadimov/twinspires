import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Socials.scss'

@CSSModules(styles)
export class Socials extends React.Component {

  render () {
    return (
      <div styleName='Socials'>
        <div styleName='social-email'>
          <a href='#'></a>
          share via email
        </div>
        <div styleName='social-facebook'>
          <a href='https://www.facebook.com/Twinspires'></a>
          share on facebook
        </div>
        <div styleName='social-twitter'>
          <a href='https://twitter.com/twinspires'></a>
          share on twitter
        </div>
      </div>
    )
  }
}

export default Socials
