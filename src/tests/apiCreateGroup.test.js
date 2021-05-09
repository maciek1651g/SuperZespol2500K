import ClientAPI from "../clientAPI/ClientAPI";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js"

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

const group = ["grupa 13"];

test('success create group test', (done) => {
    publicAPI.createGroup(...group, (res) => {
        if(res!==null)
        {
            done();
        }
    }, (error) => {
        done(error);
    });
});

test('fail create group test', (done) => {
    publicAPI.createGroup(...group, (res) => {
        if(res!==null)
        {
            done(res);
        }
    }, (error) => {
        done();
    });
});