import { useSelector, useDispatch, connect } from 'react-redux';
// import { Component } from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/index';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseCounterHandler = () => {
    dispatch(counterActions.increase(5));
  }

  const decrementCounterHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>-- {counter} --</div>}
      <div>
        <button onClick={incrementCounterHandler}>Increment</button>
        <button onClick={increaseCounterHandler}>Increase by 5</button>
        <button onClick={decrementCounterHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementCounterHandler = () => {
//     this.props.increment();
//   };

//   decrementCounterHandler = () => {
//     this.props.decrement();
//   }

//   toggleCounterHandler = () => {
//     this.props.toggleCounter();
//   }

//   render(){
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <div>
//           <button onClick={this.incrementCounterHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementCounterHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
//       </main>
//     );
// }
// }

// const mapStatetoProps = state => {
//   return {
//     counter: state.counter
//   };
// };

// const mapDispatchtoProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' }),
//     toggleCounter: () => dispatch({ type: 'toggle' })
//   };
// }


// export default connect(mapStatetoProps, mapDispatchtoProps)(Counter);
