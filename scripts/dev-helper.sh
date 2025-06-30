#!/bin/bash

# Portfolio Development Helper Script
# Usage: ./scripts/dev-helper.sh [command]

set -e

# Colors for output
RED='\\033[0;31m'
GREEN='\\033[0;32m'
YELLOW='\\033[1;33m'
BLUE='\\033[0;34m'
NC='\\033[0m' # No Color

# Function to print colored output
print_color() {
    printf \"${1}${2}${NC}\\n\"
}

# Function to check if command exists
command_exists() {
    command -v \"$1\" >/dev/null 2>&1
}

# Help function
show_help() {
    print_color $BLUE \"Portfolio Development Helper\"
    echo \"\"
    echo \"Available commands:\"
    echo \"  setup     - Install dependencies and setup project\"
    echo \"  dev       - Start development server\"
    echo \"  build     - Build for production\"
    echo \"  deploy    - Deploy to GitHub Pages\"
    echo \"  test      - Run tests\"
    echo \"  lint      - Run linting\"
    echo \"  format    - Format code\"
    echo \"  clean     - Clean build artifacts\"
    echo \"  analyze   - Analyze bundle size\"
    echo \"  help      - Show this help message\"
    echo \"\"
}

# Setup function
setup() {
    print_color $YELLOW \"Setting up portfolio project...\"
    
    if ! command_exists node; then
        print_color $RED \"Error: Node.js is not installed\"
        exit 1
    fi
    
    if ! command_exists npm; then
        print_color $RED \"Error: npm is not installed\"
        exit 1
    fi
    
    print_color $BLUE \"Installing dependencies...\"
    npm install
    
    print_color $GREEN \"Setup complete! Run './scripts/dev-helper.sh dev' to start development.\"
}

# Development server
start_dev() {
    print_color $BLUE \"Starting development server...\"
    npm start
}

# Production build
build_prod() {
    print_color $BLUE \"Building for production...\"
    npm run build
    print_color $GREEN \"Build complete! Check the 'build' directory.\"
}

# Deploy to GitHub Pages
deploy() {
    print_color $BLUE \"Deploying to GitHub Pages...\"
    npm run deploy
    print_color $GREEN \"Deployment complete!\"
}

# Run tests
run_tests() {
    print_color $BLUE \"Running tests...\"
    npm test -- --watchAll=false --coverage
}

# Run linting
run_lint() {
    print_color $BLUE \"Running ESLint...\"
    if command_exists npx; then
        npx eslint src/
    else
        print_color $YELLOW \"ESLint not found, skipping...\"
    fi
}

# Format code
format_code() {
    print_color $BLUE \"Formatting code...\"
    if command_exists npx; then
        npx prettier --write src/
    else
        print_color $YELLOW \"Prettier not found, skipping...\"
    fi
}

# Clean build artifacts
clean() {
    print_color $BLUE \"Cleaning build artifacts...\"
    rm -rf build/
    rm -rf node_modules/.cache/
    print_color $GREEN \"Clean complete!\"
}

# Analyze bundle size
analyze() {
    print_color $BLUE \"Analyzing bundle size...\"
    npm run build
    if command_exists npx; then
        npx serve -s build -p 3001 &
        SERVER_PID=$!
        sleep 2
        print_color $GREEN \"Bundle analysis server started at http://localhost:3001\"
        print_color $YELLOW \"Press any key to stop the server...\"
        read -n 1
        kill $SERVER_PID
    else
        print_color $YELLOW \"Serve not found, build completed. Check build/ directory.\"
    fi
}

# Main script logic
case \"${1:-help}\" in
    setup)
        setup
        ;;
    dev)
        start_dev
        ;;
    build)
        build_prod
        ;;
    deploy)
        deploy
        ;;
    test)
        run_tests
        ;;
    lint)
        run_lint
        ;;
    format)
        format_code
        ;;
    clean)
        clean
        ;;
    analyze)
        analyze
        ;;
    help|*)
        show_help
        ;;
esac