const bbooksReducer = ( state ={ name: 'chaitanya',
lastValues:[]
},action) => {
    if(action.type==="STORE_BBOOKS") {
        state = {
            bbooks: action.payload
        }
    }
    return state;
}
export default bbooksReducer;