import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Input } from '@chakra-ui/react';

import Search from '../components/Search';
import reducers from '../reducers';
import { items, item, total, query } from '../data';

const initialState = {
    isLoading: false,
    query: '',
    items: [],
    total: null,
    item: {},
}

describe('Search component with empty state', () => {

    const mockStore = createStore(reducers, { movies: initialState });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Search />
        </Provider>
    );
    const wrapper = getWrapper();

    it('should display empty query', () => {
        const query = wrapper.find('Input').props();
        expect(query.value).toEqual('');
    });

    it('should call change fn on onChange Input', () => {
        const mockCallBack = jest.fn();
        const input = shallow((<Input onChange={mockCallBack} />));
        input.simulate('change');
        expect(mockCallBack).toHaveBeenCalled();
    });
});

describe('Search component with state', () => {

    const mockStore = createStore(reducers, { movies: { ...initialState, items, item, total, query } });
    const getWrapper = () => mount(
        <Provider store={mockStore}>
            <Search />
        </Provider>
    );
    const wrapper = getWrapper();

    it('should display query', () => {
        const query = wrapper.find('Input').props();
        expect(query.value).toEqual('jadi');
    });

    it('should fetch movies onSubmit', () => {
        const mockCallBack = jest.fn();
        const form = shallow((<form onSubmit={mockCallBack} />));
        // console.log(form)
        form.simulate('submit');
        expect(mockCallBack).toHaveBeenCalled();
    });

});