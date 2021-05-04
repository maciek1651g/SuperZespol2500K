import ClientAPI from "../clientAPI/ClientAPI";

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

test('fail get attended groups test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        done(res);
    };
    api.onErrorFunctionHandler = (error) => {
        done();
    };

    api.getInfoGroups();
});