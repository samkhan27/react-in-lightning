// /* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import { api } from '../__mocks__/mock.js';
import reducer from '~/reducers';
import ContactSearch from '~/containers/ContactSearch';

const store = createStore(reducer, applyMiddleware(thunk.withExtraArgument(api)));

storiesOf('Contact Search', module)
    .addDecorator(withKnobs)
    .addDecorator(story => <Provider store={store}>{ story() }</Provider>)
    .add('with text', () => <ContactSearch />);
