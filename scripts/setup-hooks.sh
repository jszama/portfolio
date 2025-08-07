#!/bin/bash
# Setup script for git hooks

echo "🔧 Setting up git hooks..."

# Copy pre-commit hook
cp scripts/pre-commit .git/hooks/pre-commit

# Make it executable (Unix/Linux/Mac)
if command -v chmod &> /dev/null; then
    chmod +x .git/hooks/pre-commit
    echo "✅ Pre-commit hook installed and made executable"
# Windows fallback
elif command -v icacls &> /dev/null; then
    icacls .git/hooks/pre-commit /grant Everyone:F > /dev/null
    echo "✅ Pre-commit hook installed (Windows)"
else
    echo "⚠️  Pre-commit hook installed but may need manual permission setup"
fi

echo "🎉 Git hooks setup complete!"
echo ""
echo "The pre-commit hook will now:"
echo "  • Check TypeScript compilation"
echo "  • Validate ESLint rules"
echo "  • Prevent commits with errors"
echo ""
echo "To test: make a commit and see the hook in action!"
