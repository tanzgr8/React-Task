import React,{useState}from 'react'
import {useSelector ,useDispatch} from 'react-redux'
import {buyCake} from '../Redux'

function NewCake() {
    const numofcakes =  useSelector(state => state.cake.numofcakes)
    const [num,setnum]= useState(1);
    const dispatch= useDispatch();
    return (
        <div>
            <h1>Cake  -{numofcakes}</h1>
            <input type='text' value={num} onChange={(e)=>{setnum(e.target.value)}}/>
            <button onClick={()=>{dispatch(buyCake(num))}}> BUY {num} cakes</button>
        </div>
    )
}

export default NewCake
