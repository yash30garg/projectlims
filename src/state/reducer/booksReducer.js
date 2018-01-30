export default function (state = null, action) {
    switch (action.type) {
        case 'STORE_BOOKS':
            return action.payload;
            break;
    }
    return state;
}