import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from "react-router-dom";

import Home from '../pages/Home';
import MovieItem from '../components/MovieItem';
import reducers from '../reducers';
import { items, item, total } from '../data';

const initialState = {
    isLoading: false,
    query: '',
    items: [],
    total: null,
    item: {},
}

describe('Home component with empty state', () => {

    const mockStore = createStore(reducers, { movies: initialState });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
    const wrapper = getWrapper();

    it('should render Search component', () => {
        expect(wrapper.find('Search').exists()).toBeTruthy();
    });

    it('should not render MovieItem component', () => {
        expect(wrapper.find('MovieItem').exists()).toBeFalsy();
    });

    it('should not render MovieItemLoading component', () => {
        expect(wrapper.find('MovieItemLoading').exists()).toBeFalsy();
    });

    it('should not render ModalImage component', () => {
        expect(wrapper.find('ModalImage').exists()).toBeFalsy();
    });
});

describe('Home component with isLoading state: true', () => {

    const mockStore = createStore(reducers, { movies: { ...initialState, isLoading: true } });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
    const wrapper = getWrapper();

    it('should render MovieItemLoading component', () => {
        expect(wrapper.find('MovieItemLoading').exists()).toBeTruthy();
    });
});

describe('Home component with state', () => {

    const mockStore = createStore(reducers, { movies: { ...initialState, items, item, total } });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Router>
                <Home />
            </Router>
        </Provider>
    );
    const wrapper = getWrapper();

    it('should display total movies found', () => {
        const textTotal = wrapper.find('Center').first().text();
        expect(textTotal).toEqual('Found: 12 total');
    });

    it('should render MovieItem component', () => {
        expect(wrapper.find('MovieItem').exists()).toBeTruthy();
    });

    it('should render MovieItem component items.length times', () => {
        expect(wrapper.find('MovieItem').length).toEqual(items.length);
    });
});