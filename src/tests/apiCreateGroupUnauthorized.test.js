import ClientAPI from "../clientAPI/ClientAPI";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js"

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

const group = ["afdgdgsfghg"];

test('fail create group unauthorized test', (done) => {
    publicAPI.createGroup(...group, (res) => {
        if(res!==null)
        {
            done(res);
        }
    }, (error)=>{
        done();
    })
});