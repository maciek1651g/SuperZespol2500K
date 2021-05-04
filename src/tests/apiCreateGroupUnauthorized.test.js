import ClientAPI from "../clientAPI/ClientAPI";

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

const group = ["afdgdgsfghg"];

test('fail create group unauthorized test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        done(res);
    };
    api.onErrorFunctionHandler = (error) => {
        done();
    };

    api.register(...group);
});