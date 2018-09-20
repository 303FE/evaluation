import { createStore, compose, applyMiddleware, combineReducers} from 'redux'

import createSagaMiddleware from 'redux-saga'

import exampleReducer from '../reducer/exampleReducer'

import rootSaga from '../../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({
    exampleReducer,
}), compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension?window.devToolsExtension(): f=>f
))

sagaMiddleware.run(rootSaga)

export default store
