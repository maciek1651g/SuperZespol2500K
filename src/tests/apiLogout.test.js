import ClientAPI from "../clientAPI/ClientAPI";

beforeAll((done) => {
    ClientAPI.baseUrl = "http://localhost:5000";
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        if(res!==null)
        {
            done();
        }
    };

    api.logIn("admin123@sggw.edu.pl", "admin123");
})

test('logout test', () => {
    const api = new ClientAPI();
    api.logout();
    let res = api.checkIfLoggedIn();
    expect(res).toBe(false);
});