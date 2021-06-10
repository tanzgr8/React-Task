import React from 'react'
import Icecream from './Components/Icecream'
import NewCake from './Components/NewCake'
import Cake from './Components/Cake'
import {Provider} from 'react-redux'
import store from './Redux/store'
function App() {
  return (
    <div>
      <Provider store={store}>
      <Cake/>
      <NewCake/>
      <Icecream/>
      </Provider>
    </div>
  )
}

export default App
