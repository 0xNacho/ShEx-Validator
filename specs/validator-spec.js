var ShEx = require("../index.js");


var goodSchema = "PREFIX foaf: <http://xmlns.com/foaf/>\
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>\
    start = <PersonShape>\
<PersonShape> {\
    foaf:name xsd:string\
}";

var goodData = "PREFIX foaf: <http://xmlns.com/foaf/>\
    <Somebody>\
foaf:name \"Mr Smith\".\
";


describe("Validation Tests", function () {
    it("Should call tripleValidated", function (done) {
        testValidate(done, goodSchema, goodData, "validationResult", ["Somebody"]);
    });
});

function testValidate(done, schema, data, expectedCallback, startingNodes) {
    var callbacks = {
        schemaParsed: function (schema) {
        },
        schemaParseError: function (errorMessage) {
        },
        dataParsed: function (data) {
        },
        dataParseError: function (errorMessage) {
        },
        validationResult: function (validation) {
        }
    };
    var options = {
        startingNodes: startingNodes
    };

    spyOn(callbacks, expectedCallback);

    ShEx.validate(schema, data, callbacks, options).then(function () {
        expect(callbacks[expectedCallback]).toHaveBeenCalled();
        done();
    }, done);
}