# ShEx-validator 

Parses and a ShEx schema and ShEx data file and validates the data against the schema.

The idea is that this can remove all the parsing/validation logic from the UI code. This will be a standalone Node module with a command line interface and will also be compatable with browsirify for use in the web app.

## Installation

```sh
git clone git@github.com:HeriotWattMEng2015/ShEx-validator.git
cd ShEx-validator
npm install
```


## Usage
Currently can only run on command line and only parses with no validation.
```sh
node ShEx-validator /tests/test.shex /tests/test.turtle
```

## Tests
TODO

```sh
npm install
npm test
```

## Dependencies

- [n3](https://github.com/RubenVerborgh/N3.js): Lightning fast, asynchronous, streaming Turtle / N3 / RDF library.

## Dev Dependencies


None
