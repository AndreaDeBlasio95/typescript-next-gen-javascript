# TypeScript Lesson Project

This repository contains a simple TypeScript lesson project designed to introduce basic concepts such as variable declarations (`const`, `let`, `var`), arrow functions, default parameters, the spread operator, rest parameters, and array/object destructuring. It also demonstrates how to set up a development environment using `tsc` for TypeScript compilation and `lite-server` for live reloading during development.

## Getting Started

To get started with this project, follow these steps:

### Prerequisites

Ensure you have Node.js installed on your machine. You will also need to install TypeScript (`tsc`) and Lite Server globally if you haven't already:

```bash
npm install -g typescript lite-server
```

### Running the Project

Navigate to the project directory in your terminal and run the following command to start the development server:

```bash
lite-server
```

This will automatically open your default web browser and navigate to the project URL where you can see the output of the TypeScript code.

## Initializing TypeScript Configuration

To initialize a TypeScript project and create a `tsconfig.json` file, which is essential for configuring your TypeScript compiler options, you can use the `tsc --init` command. This command generates a `tsconfig.json` file with default settings that you can customize according to your project needs.

### Using `tsc --init`

1. **Global Installation**: If TypeScript is installed globally on your machine, you can simply run:

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.
