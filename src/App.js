import React from 'react'
// import Icecream from './Components/Icecream'
// import NewCake from './Components/NewCake'
// import Cake from './Components/Cake'
import UserContainer from './Components/UserContainer'
import {Provider} from 'react-redux'
import store from './Redux/store'
function App() {
  return (
    <div>
      <Provider store={store}>
      <UserContainer/>
      </Provider>
    </div>
  )
}

export default App
