import { createStore } from 'redux';

//Action generators

const incrementCount = ({ incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ setBy = 1 } = {}) => ({
    type: 'SET',
    setBy
});

const resetCount = () => ({
    type: 'RESET'
});

//Reducers
//1. Reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'SET':
            const setBy = typeof action.setBy === 'number' ? action.setBy : 1;
            return {
                count: setBy
            }
        case 'RESET':
            return {
                count: 0
            }
        default:
            return state;
    }
};


const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setBy: 101 }));