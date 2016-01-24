import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Promo.scss'
import classnames from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'
import Socials from '../Socials/Socials'
import Tooltip from '../Tooltip/Tooltip'

@CSSModules(styles, {allowMultiple: true})
export class Promo extends React.Component {

  static propTypes = {
    promoActive: PropTypes.bool,
    value: PropTypes.string
  };

  static defaultProps = {
    promoActive: false,
    value: 'CAMID'
  };

  state = {
    promoActive: this.props.promoActive,
    value: this.props.value,
    copied: false
  };

  render () {
    let promoClass = classnames(
      'promoItem',
      {
        '--active': this.state.promoActive === true
      }
    )

    let promoClassTwo = classnames(
      'promoItemTwo',
      {
        '--active': this.state.promoActive === true
      }
    )

    let url = 'https://www.twinspires.com/account/register?promo_code='

    let link = url + this.state.value

    return (
      <div styleName='promo-container'>
        <div styleName='promo'>

          <div styleName={promoClass}>
            <div styleName='text'>
              Send Your PROMO CODE
            </div>
            <div styleName='code'>
              {this.state.value}
            </div>

            <div onClick={this._onLinkClick} styleName='link'>
              Get Your Invitation Link
            </div>
          </div>

          <div styleName={promoClassTwo} >
            <div styleName='text'>
              Your Invitation Link
            </div>
            <div styleName='input-container'>
              <input
                  styleName='input'
                  onChange={this._onValueChange}
                  type='text'
                  value={link} />
              <CopyToClipboard text={link}
                onCopy={() => this.setState({copied: true})}>
                <button styleName='copy'>COPY</button>
              </CopyToClipboard>
            </div>

            <div onClick={this._onLinkClick} styleName='link'>
              Show your Promo Code
            </div>
          </div>
        </div>
        <Socials />
        <Tooltip />
      </div>
    )
  }

  _onValueChange = (event) => {
    this.setState({
      value: event.target.value
    })
  };

  _onLinkClick = (event) => {
    this.setState({promoActive: !this.state.promoActive})
  };

}

export default Promo
