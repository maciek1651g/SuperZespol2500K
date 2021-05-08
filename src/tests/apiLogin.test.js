import ClientAPI from "../clientAPI/ClientAPI";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js"

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

test('correct login test', (done) => {
    publicAPI.login("admin123@sggw.edu.pl", "admin123", (res) => {
        if(res!==null)
        {
            done();
        }
    }, (error) => {
        done(error);
    })
});

test('incorrect login test', (done) => {
    publicAPI.login("sadfgdfdfasd@sggw.edu.pl", "adfgadfg", (res) => {
        if(res!==null)
        {
            done(res);
        }
    }, (error) => {
        done();
    })
});