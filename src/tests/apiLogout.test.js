import ClientAPI from "../clientAPI/ClientAPI";
import publicAPI from "../publicFunctions/PublicFunctionsAPI";

beforeAll((done) => {
    ClientAPI.baseUrl = "http://localhost:5000";
    publicAPI.login("admin123@sggw.edu.pl", "admin123", (res) => {
        if(res!==null)
        {
            done();
        }
    }, (error) => {
        done(error);
    })
})

test('logout test', () => {
    publicAPI.logout();
    const api = new ClientAPI();
    let res = api.checkIfLoggedIn();
    expect(res).toBe(false);
});