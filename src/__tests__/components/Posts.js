import React from 'react';
import {Posts} from '../../modules/posts/containers/Posts';
import {shallow} from 'enzyme';
import ContentHeader from '../../shared/components/ContentHeader';

describe('Posts Component',()=>{

    let wrapper;
    let dummyPosts = [{id: 40, title: 'Hello world', body: 'It is good to learn react.js'}];

    //our mock fetchPosts function to replace the one provided by mapDispatchToProps
    const mockFetchPosts = jest.fn(()=> dummyPosts);

    beforeEach(()=>{

        let props = {

            fetchPosts: mockFetchPosts,
            posts: [],
            loading: false,
            error: {message: ""},
            match: {
                params: {
                    userId: 5
                }
            }
        };

        // pass the mock function as the fetchPosts prop 
        wrapper = shallow(<Posts {...props} />);
    });

    it('should contain the header tag of the post component',()=>{

        let tag = <h5>Posts</h5>;
        expect(wrapper.length).toEqual(1);
        expect(wrapper.contains(tag)).toBe(false);

        //Note that ContentHeader is a child component in Posts component
        expect(wrapper.find(ContentHeader).dive().contains(tag)).toBe(true);
    });

    it('should run fetchPosts function',()=>{
        wrapper.instance().componentDidMount();
        expect(mockFetchPosts.mock.calls.length).toBe(3);
    });
});