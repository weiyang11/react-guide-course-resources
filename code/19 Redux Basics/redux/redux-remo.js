const redux = require('redux');

const couterReducer = (state = {counter:0}, action) => {
  return {
    counter: state.counter + 1
  }
};

const store = redux.createStore(couterReducer);


const counterSubscriber = () => {
  const latestState = store.getState(); //latest state
  console.log(latestState);

};

store.subscribe(counterSubscriber);

store.dispatch({type: 'increment'});
