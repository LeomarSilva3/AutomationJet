module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                    // node: '../node_modules',
                },
            },
        ],
    ],
    plugins: [
        "@babel/plugin-proposal-class-properties"
    ]
};