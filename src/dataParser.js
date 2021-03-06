var Promise = require('promise');

var RDF = require('../includes/Erics_RDF.js');
var N3 = require('n3');
var N3Util = N3.Util;

exports.parseData = function parseData(dataText) {
    return parseWithN3(dataText);
};

function parseNode(text, prefixes) {

    if (prefixes && N3Util.isPrefixedName(text)) {
        text = N3Util.expandPrefixedName(text, prefixes);
    }

    if (N3Util.isLiteral(text)) {
        return RDF.RDFLiteral(
            N3Util.getLiteralValue(text),
            RDF.LangTag(N3Util.getLiteralLanguage(text)),
            RDF.IRI(N3Util.getLiteralType(text))
        );
    }
    else if (N3Util.isIRI(text) || text === "") {
        return RDF.IRI(text);
    }
    else if (N3Util.isBlank(text)) {
        return RDF.BNode(text);
    }
    throw new Error("Unknown Type of Node");
}

exports.parseNode = parseNode;

function parseWithN3(dataText) {
    var parser = N3.Parser();

    return new Promise(function (resolve, reject) {
        var resolver = RDF.createIRIResolver();
        var db = RDF.Dataset();

        parser.parse(dataText, function (error, N3triple, prefixes) {
            if (error) reject(parseN3Error(error));
            else if (N3triple) {
                var triple = RDF.Triple(
                    parseNode(N3triple.subject),
                    parseNode(N3triple.predicate),
                    parseNode(N3triple.object)
                );

                triple.line = N3triple.line;

                db.push(triple);
            }
            else {
                resolver.Prefixes = prefixes;
                resolve({db: db, resolver: resolver, resources: db.uniqueSubjects(), triples:db.triples});
            }
        });
    });
}

function parseN3Error(error) {
    var line = error.message.match(/line [0-9]*/g);

    line = (line && line.length > 0 && line[0].length > 5)?Number(line[0].substr(5)):null;

    return {
        message: error.message,
        line: line,
        column: 0
    }
}
