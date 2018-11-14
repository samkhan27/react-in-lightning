module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "airbnb"
    ],
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "modules": true
        }
    },
    "rules": {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",

        "arrow-body-style": "warn",

        "react/prop-types": 0,
        "react/display-name": 0,
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "linebreak-style": 0,
        "indent": ["error", 4],                                                 //Indent 4 spaces
        "import/extensions": [1, "never", { "json": "always" }],
        "comma-dangle": 0,
        "function-paren-newline": 0,                               
        "object-property-newline": 0,                             
        "object-curly-newline": 0,                               
        "max-len": 0,                                                           //No max line length
        "no-underscore-dangle": 0,
        "prefer-const": 0,
        "no-use-before-define": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
    }
};