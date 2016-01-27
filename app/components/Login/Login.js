import React, { PropTypes } from 'react'
import CSSModules from 'react-css-modules'
import styles from './Login.scss'

@CSSModules(styles)
export class Login extends React.Component {

  state = {
    login: this.props.login,
    password: this.props.password
  };

  render () {
    return (
      <div>
        <form styleName='login-container' method="post" action="https://www.twinspires.com/php/login.php">
          <input type="hidden" name="destination" value=""/>
          <input type="hidden" value="user_login" name="form_id"/>
          <input type="hidden" value="2800" name="affid"/>
          <input type="hidden" value="0" name="blocklogin"/>
          <input type="hidden" value="1" name="wager"/>
          <input type="hidden" value="75c1c409d022d057054b07e99e0a5690" name="tmsid"/>
          <input id="header_edit-redirect" type="hidden" value="https://www.twinspires.com/raf-test" name="redirect"/>

          <input onChange={this._onChangeLogin} styleName='input' type='text' name='acct' maxLength='100' placeholder='Username' />
          <input onChange={this._onChangePassword} styleName='input' name='pin' maxLength='16' type='password' placeholder='Password' />
          <button type='submit' style={{border: 'none'}} onClick={this._onSubmitClick} styleName='button'>
            Log In to Get Started
          </button>

          <a styleName='link' target="_blank" href='https://www.twinspires.com/account/password/request'>Forgot username/password?</a>
        </form>
        <div styleName='bottom-text'>
          New to TwinSpires? <a target="_blank" href='https://www.twinspires.com/account/register?promo_code=5FFFL' styleName='bottom-link'>Create a FREE account now.</a>
        </div>
      </div>
    )
  }


  _onChangeLogin = (event) => {
    var loginValue = event.target.value
    this.setState({login: loginValue})
  };

  _onChangePassword = (event) => {
    var passwordValue = event.target.value
    this.setState({password: passwordValue})
  };

  _onSubmitClick = (event) => {

  };

}

export default Login
