import React from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {buyIce} from '../Redux'

function Icecream() {
    const numofice =  useSelector(state => state.ice.numofice)
    const dispatch= useDispatch();
    return (
        <div>
            <h1>IceCream -{numofice}</h1>
            <button onClick={()=>{dispatch(buyIce())}}> BUY</button>
        </div>
    )
}

export default Icecream;
