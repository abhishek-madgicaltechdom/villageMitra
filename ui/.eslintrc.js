const DISABLED = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:@typescript-eslint/recommended" // Problem: “no-undef”  --  Error sample: ‘test’ is not defined
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    "react-hooks"  // React Hooks rules
  ],
  rules: {
    "no-use-before-define": "off",  // Problem: “‘no-use-before-define” --  Error sample: ‘React’ was used before it was defined
    "@typescript-eslint/no-use-before-define": ["error"],  // Problem: “‘no-use-before-define” -- Error sample: ‘React’ was used before it was defined
    "react/jsx-filename-extension": ["warn", { "extensions": [".tsx"] }], // Problem: “‘react/jsx-filename-extension” -- Error sample: JSX not allowed in files with extension ‘.tsx’
    "import/extensions": ["error", "ignorePackages", {
      "ts": "never",
      "tsx": "never"
    }], // Problem: “import/extensions” -- Error sample: Missing file extension ‘tsx’ for ‘./App’
    "no-shadow": "off", // Problem: “no-shadow”  --  Error sample: ‘Enum’ is already declared in the upper scope
    "@typescript-eslint/no-shadow": ["error"], // Problem: “no-shadow”  --  Error sample: ‘Enum’ is already declared in the upper scope
    "@typescript-eslint/explicit-function-return-type": DISABLED,   // Force all functions have explicit return type -- 
    "max-len": ["warn", { "code": 80 }],  // Max length of line code 
    "react-hooks/rules-of-hooks": "error",  // React Hooks rules
    "react-hooks/exhaustive-deps": "warn",  // React Hooks rules
    "import/prefer-default-export": "off",  // Prefer use of default export
    "react/prop-types": "off"  // Prop Types rules
  },
  "settings": {  // Problem: “import/no-unresolved”  --  Error sample: Unable to resolve path to module ‘./App’
    "import/resolver": {
      "typescript": {}
    }
  }
};
