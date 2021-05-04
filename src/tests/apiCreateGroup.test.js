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

const group = ["grupa 1"];

// test('success create group test', (done) => {
//     const api = new ClientAPI();
//     api.onSuccessFunctionHandler = (res) => {
//         if(res!==null)
//         {
//             done();
//         }
//     };
//     api.onErrorFunctionHandler = (error) => {
//         done(error);
//     };
//
//     api.createGroup(...group)
// });

test('fail create group test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        if(res!==null)
        {
            done(res);
        }
    };
    api.onErrorFunctionHandler = (error) => {
        done();
    };

    api.createGroup(...group)
});