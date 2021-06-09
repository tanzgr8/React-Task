import React from 'react'
import Icecream from './Components/Icecream'
import Cake from './Components/Cake'
import {Provider} from 'react-redux'
import store from './Redux/store'
function App() {
  return (
    <div>
      <Provider store={store}>
      <Cake/>
      <Icecream/>
      </Provider>
    </div>
  )
}

export default App
