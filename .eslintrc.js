module.exports = {
  "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true
    },

    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "indent": ["error", 2],
        "react/jsx-indent": ["error", 2]
    },

  "extends": "airbnb",
};
