module.exports = {
    env: {
        es2021: true,
        node: true,
        jest: true,
    },
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module", // Permet d'utiliser 'import/export'
    },
    extends: ["eslint:recommended"],
    rules: {
        "no-unused-vars": "warn",
        "prefer-const": "error",
        eqeqeq: "error",
        semi: ["error", "always"],
    },
};