import React from 'react';
import {PostItem} from '../../modules/posts/components/PostItem';
import {shallow} from 'enzyme';

describe("Post Item Component",()=>{

    let wrapper;

    it("should not display post title if post not provided",()=>{

        let postItem = {};
        wrapper = shallow(<PostItem post={postItem}/>);
        expect(wrapper.find('.post-title').exists()).toBe(false);
    });


    it("should display post title if post is provided",()=>{

        let postItem = {title: "Hello World", body: "React Unit testing is fun"};
        wrapper = shallow(<PostItem post={postItem}/>);
        expect(wrapper.find('.post-title').exists()).toBe(true);
    });

    it("should display post body if post is provided",()=>{

        let postItem = {title: "Hello World", body: "React Unit testing is fun"};
        wrapper = shallow(<PostItem post={postItem}/>);
        expect(wrapper.find('.post-body').exists()).toBe(true);
    });

});