import React from 'react';
import { shallow, mount } from 'enzyme';
import { BrowserRouter as Router } from "react-router-dom";

import MovieItem from '../components/MovieItem';
import { item } from '../data';

describe('MovieItem Component', () => {
    const mockCallBack = jest.fn();
    const getWrapper = () => mount(
        <Router>
            <MovieItem movie={item} onClickImage={mockCallBack} />
        </Router>
    );
    const wrapper = getWrapper();

    it('should receive movie props', () => {
        expect(wrapper.props().children.props.movie).toBeTruthy();
    });

    it('should receive onClickImage props', () => {
        expect(wrapper.props().children.props.onClickImage).toBeTruthy();
    });

    it('should call onClickImage fn when MovieItem image clicked', () => {
        const mockCallBack = jest.fn();

        const posterImage = shallow((<MovieItem movie={item} key={item.imdbID} onClickImage={mockCallBack} />));
        posterImage.find('Image').simulate('click');
        expect(mockCallBack).toHaveBeenCalled();
    });

    it('should display movie title and year', () => {
        const titleDisplay = wrapper.find('Text').first().text();
        expect(titleDisplay).toEqual('Naga Bonar Jadi 2 (2007)');
    });

    it('should display movie type and the right tag color', () => {
        const props = wrapper.find('Tag').first().props();
        expect(props.children).toEqual('movie');
        expect(props.colorScheme).toEqual('teal');
    });

    it('should display movie poster on image', () => {
        const props = wrapper.find('Image').first().props();
        expect(props.src).toEqual('https://m.media-amazon.com/images/M/MV5BOGMyNzZhYmMtMmMzYi00YmFlLWJkOTMtNTQ4MjMyNDM2NmIzXkEyXkFqcGdeQXVyMjM5OTkzMjI@._V1_SX300.jpg');
    });

    it('should include link to detail page', () => {
        const props = wrapper.find('Link').props();
        expect(props.to).toBe(`/${item.imdbID}`);
    });
});