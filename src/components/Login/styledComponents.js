import styled from 'styled-components'

export const LoginContainer = styled.div`
  height: 100vh;
  background-color: ${props => props.currentMode === 'darkMode' && '#000000'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
`

export const LoginSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 3px 15px #cbd5e1;
  padding: 45px 25px 45px 25px;
  border-radius: 8px;
  @media (max-width: 576px) {
    width: 100%;
  }
`

export const NxtWatchLogo = styled.img`
  width: 200px;
  @media (max-width: 576px) {
    width: 150px;
  }
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 50px;
  width: 450px;
  @media (max-width: 576px) {
    width: 100%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Roboto';
  margin-bottom: 20px;
`

export const InputLabel = styled.label`
  font-weight: bold;
  color: #606060;
  margin-bottom: 8px;
  font-size: 12px;
`

export const LoginInput = styled.input`
  width: 100%;
  padding: 8px 12px 8px 12px;
  border: 2px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
`

export const CheckBoxInput = styled.input`
  margin-right: 6px;
`

export const ShowPasswordContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const ShowPasswordLabel = styled.label`
  font-family: 'Roboto';
  font-weight: bold;
  color: #1e293b;
  font-size: 14px;
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  margin-top: 18px;
  width: 100%;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 12px 25px 12px 25px;
  font-weight: bold;
  font-size: 15px;
  font-family: 'Roboto';
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #ff0b37;
  font-weight: 500;
`
