export default function (state = null, action) {
    switch (action.type) {
        case 'STORE_BBOOKS':
            return action.payload;
            break;
    }
    return state;
}