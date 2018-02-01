export default function (state = null, action) {
    switch (action.type) {
        case 'STORE_REVIEWS':
            return action.payload;
            break;
    }
    return state;
}