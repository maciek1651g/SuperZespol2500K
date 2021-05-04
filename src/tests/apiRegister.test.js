import ClientAPI from "../clientAPI/ClientAPI";

beforeAll(() => {
    ClientAPI.baseUrl = "http://localhost:5000";
})

const user = ["admin12345678", "admin12345678@sggw.edu.pl", "admin12345678", "admin","admin"];

// test('success register test', (done) => {
//     const api = new ClientAPI();
//     api.onSuccessFunctionHandler = (res) => {
//         expect(res).toBe(true)
//         done();
//     };
//     api.onErrorFunctionHandler = (error) => {
//         done(error);
//     };
//
//     api.register(...user);
// });

test('fail register test', (done) => {
    const api = new ClientAPI();
    api.onSuccessFunctionHandler = (res) => {
        expect(res).toBe(false)
        done(res);
    };
    api.onErrorFunctionHandler = (error) => {
        done();
    };

    api.register(...user);
});