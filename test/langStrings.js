var ShExWrapper = require("./ShExWrapper.js");
var assert = require("assert");

var schema = "\
PREFIX foaf: <http://xmlns.com/foaf/>\
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\
\
<PersonShape> {\
    foaf:name rdf:langString\
}\
";

var data = '\
PREFIX foaf: <http://xmlns.com/foaf/> \
<Somebody>\
    foaf:name "Mr Smith"@en,"Mr Smith Jnr the third"@en-us .\
';


describe("Test langString functionality", function () {
    it.skip("Should allow multiple languages", function (done) {
        var validationResult = function (res) {
            assert(res.passed);
            done();
        };
        ShExWrapper.validate(schema, data, "validationResult", validationResult, {Somebody: "<PersonShape>"});
    });
});


