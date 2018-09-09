const verifyInput = require('../src/verifyInput');

describe('verify input',() =>{
   it('verifyInput return wrong input when given 1 2',()=>{
       let result = verifyInput("1 2");
       expect(result).toEqual("Wrong Input，Input again");
   });
});