import ClientAPI from "../clientAPI/ClientAPI";

beforeAll((done) => {
    const api = new ClientAPI();
    ClientAPI.baseUrl = "http://localhost:5000";
    api.onSuccessFunctionHandler = (res) => {
        if(res!==null)
        {
            done();
        }
    };
    api.logIn("admin123@sggw.edu.pl", "admin123");
})

test('success get attended groups test', (done) => {
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

    api.getInfoGroups();
});