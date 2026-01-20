import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import boundaries from "eslint-plugin-boundaries";

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    plugins:{
        boundaries,
    },

    settings: {
        "boundaries/elements": [
            {type:"domain",pattern:"src/domain/*"},
            {type:"filters",pattern:"src/filters/*"},
            {type:"components",pattern:"src/components/*"},
            {type:"ui",pattern:"src/ui/*"},
            {type:"infrastructure",pattern:"src/infrastructure/*"},
            {type:"app",pattern:"src/app/*"},
        ]
    },

    rules: {
        "boundaries/element-types": ["error", {
            default: "disallow",
            rules: [
                { from: "domain", allow: [] },
                { from: "filters", allow: ["domain"] },
                { from: "components", allow: ["domain"] },
                { from: "ui", allow: ["components", "filters"] },
                { from: "infrastructure", allow: ["ui", "filters", "components", "domain"] },
                { from: "app", allow: ["ui", "filters", "components", "domain", "infrastructure"] },
            ],
        }],
    },

  },
])
