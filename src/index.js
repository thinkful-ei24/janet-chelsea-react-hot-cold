import React from 'react';
import ReactDOM from 'react-dom';
//testing
import store from './store';
import { addGuess, changeFeedback } from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

store.dispatch(addGuess(1));
store.dispatch(addGuess(41));
store.dispatch(addGuess(80));

store.dispatch(changeFeedback('Hello!'));
console.log(store.getState());

ReactDOM.render(<Game />, document.getElementById('root'));
