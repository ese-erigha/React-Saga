import * as postActions from '../../modules/posts/postsActions';

describe("Post Actions",()=>{

    it("should return the fetchPost action",()=>{

        const payload = {
            session: { sessionId: "sid" }
        };

        const action = postActions.fetchPostsAction(payload);
        expect(action).toEqual({
            type: postActions.FETCH_POSTS,
            payload: payload
        })

    });

    it("should return the fetchPostSuccess action",()=>{

        const payload = {
            session: { sessionId: "sid" }
        };

        const action = postActions.fetchPostsSuccessAction(payload);
        expect(action).toEqual({
            type: postActions.FETCH_POSTS_SUCCESS,
            payload: payload
        })

    });


    it("should return the fetchPostError action",()=>{

        const payload = {
            session: { sessionId: "sid" }
        };

        const action = postActions.fetchPostsErrorAction(payload);
        expect(action).toEqual({
            type: postActions.FETCH_POSTS_ERROR,
            payload: payload
        })

    });
});
