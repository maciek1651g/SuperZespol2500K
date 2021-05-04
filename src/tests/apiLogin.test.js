import ClientAPI from "../clientAPI/ClientAPI";

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

test('correct login test', (done) => {
    const api = new ClientAPI();

    api.onSuccessFunctionHandler = (res) => {
        if(res!==null)
        {
            done();
        }
    };
    api.onErrorFunctionHandler = (error) => {
        done(error);
    };

    api.logIn("admin123@sggw.edu.pl", "admin123");
});

test('incorrect login test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        expect(res).toBe(null);
        done(res);
    };
    api.onErrorFunctionHandler = (error) => {
        done();
    };

    api.logIn("sadfgdfdfasd@sggw.edu.pl", "adfgadfg");
});