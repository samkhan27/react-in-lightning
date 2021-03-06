import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import ContactSearch from '~/containers/ContactSearch';
import initStore from '~/config/reduxSetup';
import configureApi from '~/lib/api';

export const initApi = service => configureApi(service);

export const init = (el, api) => {
    const store = initStore(api);
    render((
        <Provider store={store}>
            <ContactSearch />
        </Provider>
    ), el);
};
