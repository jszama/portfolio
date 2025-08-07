import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		rules: {
			// Enforce tabs instead of spaces
			indent: [
				"error",
				"tab",
				{
					SwitchCase: 1,
					VariableDeclarator: 1,
					outerIIFEBody: 1,
					MemberExpression: 1,
					FunctionDeclaration: { parameters: 1, body: 1 },
					FunctionExpression: { parameters: 1, body: 1 },
					CallExpression: { arguments: 1 },
					ArrayExpression: 1,
					ObjectExpression: 1,
					ImportDeclaration: 1,
					flatTernaryExpressions: false,
					ignoreComments: false,
					ignoredNodes: [
						"TemplateLiteral *",
						"JSXElement",
						"JSXElement > *",
						"JSXAttribute",
						"JSXIdentifier",
						"JSXNamespacedName",
						"JSXMemberExpression",
						"JSXSpreadAttribute",
						"JSXExpressionContainer",
						"JSXOpeningElement",
						"JSXClosingElement",
						"JSXFragment",
						"JSXOpeningFragment",
						"JSXClosingFragment",
						"JSXText",
						"JSXEmptyExpression",
						"JSXSpreadChild",
					],
					offsetTernaryExpressions: false,
				},
			],
			"no-mixed-spaces-and-tabs": "error",
			"@typescript-eslint/indent": ["error", "tab"],
		},
	},
	...compat.extends("prettier"),
];

export default eslintConfig;
