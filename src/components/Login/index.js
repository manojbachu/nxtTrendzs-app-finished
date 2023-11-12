import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppContext from '../../context/AppContext'

import {
  LoginContainer,
  NxtWatchLogo,
  LoginForm,
  LoginSubContainer,
  InputContainer,
  InputLabel,
  LoginInput,
  ShowPasswordContainer,
  CheckBoxInput,
  ShowPasswordLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    errorMsg: '',
    showErrorMsg: false,
  }

  loginSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  loginFailure = errorMsg => {
    this.setState({showErrorMsg: true, errorMsg})
  }

  onClickLogin = async event => {
    event.preventDefault()

    const {password, username} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.loginSuccess(data.jwt_token)
    } else {
      this.loginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeShowPassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {
      username,
      password,
      showErrorMsg,
      errorMsg,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <AppContext.Consumer>
        {value => {
          const {mode} = value

          return (
            <LoginContainer currentMode={mode}>
              <LoginSubContainer>
                <NxtWatchLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <LoginForm onSubmit={this.onClickLogin}>
                  <InputContainer>
                    <InputLabel htmlFor="username">USERNAME</InputLabel>
                    <LoginInput
                      value={username}
                      onChange={this.onChangeUsername}
                      id="username"
                      placeholder="Username"
                    />
                  </InputContainer>
                  <InputContainer>
                    <InputLabel htmlFor="password">PASSWORD</InputLabel>
                    <LoginInput
                      value={password}
                      onChange={this.onChangePassword}
                      id="password"
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                    />
                  </InputContainer>
                  <ShowPasswordContainer>
                    <CheckBoxInput
                      onClick={this.onChangeShowPassword}
                      id="showPassword"
                      type="checkbox"
                    />
                    <ShowPasswordLabel htmlFor="showPassword">
                      Show Password
                    </ShowPasswordLabel>
                  </ShowPasswordContainer>
                  <LoginButton type="submit">Login</LoginButton>
                  {showErrorMsg && <ErrorMsg>*{errorMsg}</ErrorMsg>}
                </LoginForm>
              </LoginSubContainer>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default Login
