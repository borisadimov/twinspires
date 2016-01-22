import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Promo.scss'
import Socials from '../Socials/Socials'

@CSSModules(styles)
export class Promo extends React.Component {

  static propTypes = {
    promoActive: PropTypes.bool
  };

  static defaultProps = {
    promoActive: false
  };

  state = {
    promoActive: this.props.promoActive
  };

  render () {
    return (
      <div>
        <div styleName='promo'>
          <div styleName='text'>
            Send Your PROMO CODE
          </div>
          <div styleName='code'>
            CAMID
          </div>

          <div onClick={this._onClick} styleName='link'>
            Get Your Invitation Link
          </div>
        </div>
        <div styleName='promo-two'>
          <div styleName='text'>
            Your Invitation Link
          </div>
          <div styleName='input-container'>
            <input styleName="input" type="text" value="https://www.twinspires.com/account/register?promo_code=CAMID" />
            <div styleName="copy">COPY</div>
          </div>

          <div onClick={this._onClick} styleName='link'>
            Show your Promo Code
          </div>
        </div>
      </div>
    )
  }

  _onClick = (event) => {
    this.setState({promoActive: !this.state.promoActive})
  };

}

export default Promo
