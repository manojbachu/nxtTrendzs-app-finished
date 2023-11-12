import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import AppContext from './context/AppContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {mode: 'lightMode'}

  onChangeMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'lightMode' ? 'darkMode' : 'lightMode',
    }))
  }

  render() {
    const {mode} = this.state
    return (
      <AppContext.Provider
        value={{
          mode,
          onChangeMode: this.onChangeMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
