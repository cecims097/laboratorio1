const httpFunction= require('./index');
const context = require('../testing/Context');

test('Http trigger example' , async() => {
    const request= {
        query: { name: 'ceci' }
};
var iterations = 1000000;
console.time('FUNCTION #1');
for (var i = 0; i < iterations; i++) {
    await httpFunction(context,request);
}
    console.timeEnd('FUNCTION #1');
    expect(context.res.body).toEqual('Welcome, ceci');
    expect(context.log.mock.calls.length).toBe(1000000);
});