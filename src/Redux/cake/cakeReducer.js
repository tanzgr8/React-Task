const intialState ={
    numofcakes:20
}
const cakeReducer =(state=intialState,action)=>{
    switch(action.type){
        case "BUY_CAKE":return{
            ...state,
            numofcakes:state.numofcakes-1
        }
        default: return state

        }
    }
export default cakeReducer;