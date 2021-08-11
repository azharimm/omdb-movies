import React from 'react';
import { mount } from 'enzyme';
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { MemoryRouter } from "react-router-dom";

import Detail from '../pages/Detail';
import reducers from '../reducers';

const initialState = {
    isLoading: false,
    query: '',
    items: [],
    total: null,
    item: {},
}

describe('Detail component with empty state test', () => {
    const middleware = [thunk];
    const mockStore = createStore(reducers, { movies: initialState }, compose(
        applyMiddleware(...middleware),
    ));
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <MemoryRouter>
                <Detail />
            </MemoryRouter>
        </Provider>
    );
    const wrapper = getWrapper();

    it('should not render MovieDetail component', () => {
        expect(wrapper.find('MovieDetail').exists()).toBeFalsy();
    });

    it('should render MovieDetailLoading component', () => {
        expect(wrapper.find('MovieDetailLoading').exists()).toBeTruthy();
    });
});
