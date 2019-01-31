export function counter(state = 0, action) {
    switch (action.type) {
        case 'jia':
            return state + 1;
        case 'jian':
            return state - 1;
        default:
            return 10
    }
}
