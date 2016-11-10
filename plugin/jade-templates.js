var jade = Npm.require('jade');

var config = {};
//var jadeOpts = {pretty:true, compileDebug:false};
var jadeOpts = { compileDebug:false };

Plugin.registerCompiler({
    extensions: ['jade'],
    filenames:  []

}, function () {
    return {processFilesForTarget: processFiles};
});

function processFiles (files) {
    if (config.verbose)
        console.log('\nProcessing JADE templates:');

    files.forEach(compile);
};

function compile(file) {

    var content = file.getContentsAsString();
    var inputFile = file.getPathInPackage();

    var moduleName = inputFile.replace(/\\/g, '/').replace('.jade', '');
    var path = moduleName + '.jade';
    var output = content;

    try {
        jadeOpts.filename = inputFile;
        output = jade.compile(content, jadeOpts)();

        if (output.trim()) {
            output = 'exports["default"] = "' + clean(output) + '";' + '\n'
            // + 'module.exports = exports["default"];' + '\n'
            + 'Object.defineProperty(exports, "__esModule", { value: true });';
        }

    } catch (er) {
        file.error({ message: er });
    }

    file.addJavaScript({
        path: path,
        data: output,
        sourcePath: inputFile
    });
}

function clean(src) {
    return src
            .replace(/(["\\])/g, '\\$1')
            .replace(/[\f]/g, "\\f")
            .replace(/[\b]/g, "\\b")
            .replace(/[\n]/g, "\\n")
            .replace(/[\t]/g, "\\t")
            .replace(/[\r]/g, "\\r")
            .replace(/[\u2028]/g, "\\u2028")
            .replace(/[\u2029]/g, "\\u2029");
        // + '";';
}
