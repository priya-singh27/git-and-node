var _ = require('underscore');
//How require func resolves a module?
/*
 *Firstly it will check if it is a Core module
 Secondly checks if its a file or folder
 Thirdly if its a present in node_modules folder
 */

var result = _.contains([4, 5, 8, 10], 4);//checking if 4 is in the array and returns boolean
console.log(result);

//If you are sharing this code and dont want that this big code
//take time to go or download then you do not need to send node_modules
//But then this project will not run right?
//The solution is the package.json file has list of all the dependencies
//with their correct version which our project need so just a command in terminal
//and our node_modules file will be back the command is
//    npm i  ,thats it. 
