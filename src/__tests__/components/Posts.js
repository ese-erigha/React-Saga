import React from 'react';
import ConnectedPosts,{Posts} from '../../modules/posts/containers/Posts';
import {shallow, mount} from 'enzyme';
import ContentHeader from '../../shared/components/ContentHeader';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import '../../setupTests';



describe('The Posts Component - shallow rendering component',()=>{

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


describe("The Posts Component - Shallow rendering + mocking and passing store",()=>{

    const initialState = {
        loading: false,
        users:[],
        posts:[],
        error: {}
    };

    const mockFetchPosts = jest.fn(()=> dummyPosts);

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

    const mockStore = configureStore();
    let store,wrapper;

    beforeEach(()=>{

        store = mockStore(initialState);
        wrapper = shallow(<ConnectedPosts {...props}/>,{context: {store}}); //https://github.com/airbnb/enzyme/issues/1002#issuecomment-421535999
        
    });

    it('should render the smart component', () => {
        
        expect(wrapper.length).toEqual(1);
    });

    //https://github.com/airbnb/enzyme/issues/384#issuecomment-219156593
    //https://github.com/airbnb/enzyme/issues/384#issuecomment-356909808
    it('+++ check Prop matches with initialState', () => {
        expect(wrapper.instance().props.loading).toEqual(initialState.loading); 
     });
});