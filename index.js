/**
 * @format
 */
import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { Provider } from 'react-redux'
import { store, persistor } from './ducks/store';

// import configureStore from './ducks/store'
// const store = configureStore()

class pawApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

AppRegistry.registerComponent('pawApp', () => pawApp);
