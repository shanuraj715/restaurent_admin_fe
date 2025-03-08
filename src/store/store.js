import { applyMiddleware, combineReducers, compose, createStore, } from 'redux';
import PostsReducer from './reducers/PostsReducer';
import { thunk } from 'redux-thunk';
import { AuthReducer } from './reducers/AuthReducer';
import todoReducers from './reducers/Reducers';
import { PageDataReducer } from './reducers/PageDataReducer';
import { AppDataReducer } from './reducers/AppStateReducer';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    // posts: PostsReducer,
    auth: AuthReducer,
    // todoReducers,
    pageData: PageDataReducer,
    appState: AppDataReducer,
});

export const store = createStore(reducers, composeEnhancers(middleware));