import mockAxios from 'axios'; //returns the mocked version of axios in the __mocks__ folder
import {getUsers} from '../../shared/services/httpService';

describe("The Http Service",async()=>{
    it("fetches data for users", async()=>{

        //Setup the mock
        mockAxios.get.mockImplementationOnce(()=> //mocking or setting the data to be returned by the endpoint
            Promise.resolve({
                data: [{id: 43, name: "Ese Erigha"}]
            })
        );

        const usersUrl = "https://jsonplaceholder.typicode.com/users";
        const users = await getUsers(usersUrl);
        
        expect(users).toEqual([{id: 43, name: "Ese Erigha"}]);
        expect(mockAxios.get).toHaveBeenCalledTimes(1);
        expect(mockAxios.get).toHaveBeenCalledWith(usersUrl);
    });
});