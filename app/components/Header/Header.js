import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Header.scss'

@CSSModules(styles)
export class Header extends React.Component {
  render () {
    return (
      <div>
        <div styleName='Header'>
          Every time a friend registers on TwinSpires.com with your invitation code and places their first bet, you’ll get $10 FREE. So will your friend.
        </div>
        <div styleName='Header-bold'>
          Start getting free bets!
        </div>
      </div>
    )
  }
}

export default Header
