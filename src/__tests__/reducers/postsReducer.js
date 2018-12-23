import postsReducer from '../../modules/posts/postsReducer';
import initialState from '../../shared/models/initialState';
import {FETCH_POSTS_SUCCESS, FETCH_POSTS_PENDING } from '../../modules/posts/postsActions';


describe("The Posts Reducer", ()=>{

    it("should return default state when an unknown action is passed",()=>{

        const state = ["foo","bar"];
        const newState = postsReducer(state,{type: "Unrecognized action"});
        expect(newState).toEqual(state);
        expect(newState).toBe(state);

    });


    it("should return posts on fetch successful", ()=>{

        const oldState = initialState;
        const posts = [{id: 45, title: "Hello world"},{id: 46, title: "I am new oooooo"}];
        const newState = postsReducer(oldState,{type: FETCH_POSTS_SUCCESS, payload: posts });
        expect(newState.posts).toEqual(posts);
    });

    it("should return loading flag as true on post fetch pending", ()=>{

        const oldState = initialState;
        const newState = postsReducer(oldState,{type: FETCH_POSTS_PENDING });
        expect(newState.loading).toEqual(true);

    });

});