var Promise = require('promise');

var shexSchemaParser = require('../includes/shexParser.js');
var RDF = require('../includes/Erics_RDF.js');

exports.parseSchema = function parseSchema(schemaText) {
    return new Promise(function (resolve, reject) {
        var resolver = RDF.createIRIResolver();
        var schema;
        try {
            schema = shexSchemaParser.parse(schemaText, {iriResolver: resolver, bnodeScope:RDF.createBNodeScope()});
        }
        catch (e) {
            reject(e);
        }

        var shapes = schema.ruleLabels.map(function (rule) {
            return rule.toString();
        });

        resolve({schema: schema, resolver: resolver, shapes: shapes});
    });
};
