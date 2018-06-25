import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {combineReducers, createStore} from 'redux';
import {Provider, connect} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import archiveReducer, {articleReducer} from "./Reducers/Reducers";

const rootReducer = combineReducers({
    archiveState: archiveReducer,
    articleState: articleReducer
});

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/archives" render={(props) => <App {...props} isArchive={true}/>}/>
            </div>
        </Router>
    </Provider>, document.getElementById('root'))
;

if (module.hot) {
    module.hot.accept();
}
registerServiceWorker();
