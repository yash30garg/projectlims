export default function (state = null, action) {
    switch (action.type) {
        case 'STORE_WBOOKS':
            return action.payload;
            break;
    }
    return state;
}