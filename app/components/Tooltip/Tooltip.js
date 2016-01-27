import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './Tooltip.scss'
import classNames from 'classnames'

@CSSModules(styles, {allowMultiple: true})
export class Tooltip extends React.Component {

  state = {
    tooltipOpened: false
  }

  _handleOnClick = () => {
    this.setState({
      tooltipOpened: !this.state.tooltipOpened
    })
  }

  render () {

    let activeTooltip = classNames(
        'button',
        {
            'button-active': this.state.tooltipOpened === true,
        },
        activeTooltip
    );

    return (
      <div styleName='Tooltip'>
        <div onClick={this._handleOnClick} styleName={activeTooltip}> Terms and Conditions </div>
        <div styleName='message'>
          <b>Terms and Conditions</b>
          For every friend who registers on TwinSpires.com with your invitation code, you and your friend will get $10 FREE on your respective TwinSpires account once your friend places their first bet. $10 credit will be applied automatically to your account 48 hours after your referred friend has placed a bet.
        </div>
      </div>
    )
  }
}

export default Tooltip
