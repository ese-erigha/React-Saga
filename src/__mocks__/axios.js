const mockAxios =  {
    get: jest.fn(()=> Promise.resolve({data: []})) //mocking the get function of axios
};

export default mockAxios;