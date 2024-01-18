const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
	counter: 0
}

//reducer
const rootReducer = (state = initialState, action) => {

	if (action.type === 'INC_COUNTER') {
		return {
			...state,
			counter: ++state.counter
		}

	}

	if (action.type === 'ADD_COUNTER') {

		return {
			...state,
			counter: (state.counter + action.value ?? 0)
		}
	}

	return state;
}


//Store
const store = createStore(rootReducer);

store.subscribe(() => {
	console.log(store.getState());
})



store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 5});
