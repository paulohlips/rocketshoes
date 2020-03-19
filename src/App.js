import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import Header from './components/Header';
import GlobalStyles from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <Header />

                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
