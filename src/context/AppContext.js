import React from 'react'

const AppContext = React.createContext({
  mode: 'darkMode',
  onChangeMode: () => {},
})

export default AppContext
