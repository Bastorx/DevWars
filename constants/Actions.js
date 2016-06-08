var _ = require('lodash');
var define = function (constants) {
    return _.zipObject(constants, constants);
};

module.exports = define([
    'NAVIGATE_START',
    'NAVIGATE_SUCCESS',
    'NAVIGATE_FAILURE',
    'RECEIVE_TOKEN',
    'DELETE_TOKEN'
]);
