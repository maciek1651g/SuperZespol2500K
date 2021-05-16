import ClientAPI from "../clientAPI/ClientAPI";

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

test('success get group test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        if(res!==null)
        {
            done();
        }
        done(res);
    };
    api.onErrorFunctionHandler = (error) => {
        done(error);
    };

    api.getAllGroups();
});