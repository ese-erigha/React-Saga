import mockAxios from 'axios'; //returns the mocked version of axios in the __mocks__ folder
import {getUsers, getPosts} from '../../shared/services/httpService';

describe("The User Method in Http Service",async()=>{

    it("fetches data for users", async()=>{

        const value = [{id: 43, name: "Ese Erigha"}];
        //Setup the mock
        mockAxios.get.mockImplementationOnce(()=> //mocking or setting the data to be returned by the endpoint
            Promise.resolve({
                data: value
            })
        );

        const usersUrl = "https://jsonplaceholder.typicode.com/users";
        const users = await getUsers(usersUrl);
        
        expect(users).toEqual(value);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(usersUrl);
    });
});

describe("The Post Method in Http Service",async()=>{

    it("fetches data from posts",async ()=>{

        const value = [{id: 43, title: "Hello World"}];
        mockAxios.get.mockImplementationOnce(()=>

            Promise.resolve({
                data: value
            })
        );

        const postsUrl = "https://jsonplaceholder.typicode.com/posts";
        const params = {userId: 5};
        const posts = await getPosts(postsUrl,params);
        expect(posts).toEqual(value);
        expect(mockAxios.get).toHaveBeenCalledTimes(2);
        expect(mockAxios.get).toHaveBeenCalledWith(postsUrl,{params:params}); //Note the signature of the param object i.e httpService line 21
    });
});


