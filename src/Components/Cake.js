import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {buyCake} from '../Redux'

function Cake() {
    const numofcakes =  useSelector(state => state.cake.numofcakes)
    const dispatch= useDispatch();
    return (
        <div>
            <h1>Cake  -{numofcakes}</h1>
            <button onClick={()=>{dispatch(buyCake())}}> BUY</button>
        </div>
    )
}

export default Cake
