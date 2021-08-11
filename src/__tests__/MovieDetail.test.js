import React from 'react';
import { mount } from 'enzyme';
import { BrowserRouter as Router } from "react-router-dom";

import MovieDetail from '../components/MovieDetail';
import { item } from '../data';

describe('MovieDetail Component', () => {
    const getWrapper = () => mount(
        <Router>
            <MovieDetail movie={item} />
        </Router>
    );
    const wrapper = getWrapper();

    it('should receive movie props', () => {
        expect(wrapper.props().children.props.movie).toBeTruthy();
    });

    it('should display movie poster on image', () => {
        const props = wrapper.find('Image').first().props();
        expect(props.src).toEqual('https://m.media-amazon.com/images/M/MV5BOGMyNzZhYmMtMmMzYi00YmFlLWJkOTMtNTQ4MjMyNDM2NmIzXkEyXkFqcGdeQXVyMjM5OTkzMjI@._V1_SX300.jpg');
    });

    it('should display movie detail data on table', () => {
        const table = wrapper.find('Table');
        expect(table).toBeTruthy();
    });

});