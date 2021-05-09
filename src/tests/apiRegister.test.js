import ClientAPI from "../clientAPI/ClientAPI";
import publicAPI from "./../publicFunctions/PublicFunctionsAPI.js"

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

const user = ["admin123", "admin123@sggw.edu.pl", "admin123", "admin123","admin123", 0];

test('success register test', (done) => {
    publicAPI.register(...user, (res)=>{
        if(res!==null)
        {
            done();
        }
    }, (error) => {
        done(error);
    })
});

test('fail register test', (done) => {
    publicAPI.register(...user, (res)=>{
        if(res!==null)
        {
            done(res);
        }
    }, (error) => {
        done();
    })
});