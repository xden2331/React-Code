/* Maintain a list of posts from api */
export default (state = [], {type, payload}) => {
    switch (type) {
        case 'FETCH_POSTS':
            return payload;
        default:
            return state;
    }
};