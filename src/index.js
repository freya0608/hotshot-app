// import  {createStore,applyMiddleware} from 'redux';
// import thunk from 'redux-thunk'
// import {Provider} from 'react-redux'
// function counter(state = 0, action) {
//     switch (action.type) {
//         case 'jia':
//             return state + 1;
//         case 'jian':
//             return state - 1;
//         default:
//             return 10
//     }
// }
//
// const store = createStore(counter,applyMiddleware(thunk));
//
//
// const init  = store.getState();
// console.log(init);
//
// function listener(){
//     const current = store.getState();
//     console.log(`现在有机枪${current}把`)
// }
//
// store.subscribe(listener);
//
// store.dispatch({type:'jia'});
// store.dispatch({type:'jia'});
// store.dispatch({type:'jian'});
// console.log(store.getState());



import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import reducers from './reducer';
import './config';

import Login from './container/login/login'
import Register from './container/register/register'

const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f=>f
));
ReactDom.render(
    (<Provider store = {store}>
        <BrowserRouter>
            <div>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
            </div>
        </BrowserRouter>
        </Provider>),
        document.getElementById('root')
);











