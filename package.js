Package.describe({
    name: 'pbastowski:jade-templates',
    version: '0.0.8',
    summary: 'JADE templates for Meteor 1.3',
    git: 'https://github.com/pbastowski/meteor-jade-templates',
    documentation: 'README.md'
});

Package.registerBuildPlugin({
    name: "jade-templates",
    sources: [
        'plugin/jade-templates.js'
    ],
    npmDependencies: {
        'jade': '1.11.0'
    }
});
Package.onUse(function (api) {
    api.versionsFrom('1.3');

    api.use('isobuild:compiler-plugin@1.0.0');
});
