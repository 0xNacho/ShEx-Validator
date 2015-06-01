# ShEx-validator

Parses and a ShEx schema and RDF data file and validates the resources in the data against the shapes in the schema.

I forked this project from [https://github.com/HeriotWattMEng2015/ShEx-validator](HeriotWattMEng2015).

I fixed some errors in files wherein relative paths were wrong. Furthermore, I added a new ShEx example in folder /samples.

## Usage
`node src/commandLine.js samples/test.shex samples/test.turtle -f`


In future when globally installed:

<!--- BEGIN USAGE -->
    Usage:
        ShEx-validator [options] SCHEMA DATA RESOURCE=SHAPE [RESOURCE=SHAPE ...]

    Options:
        -f, --find-shapes   Find shapes which match the resources
<!--- END USAGE -->
## License

MIT
