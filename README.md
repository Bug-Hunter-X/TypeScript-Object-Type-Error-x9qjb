# TypeScript Object Type Error

This repository demonstrates a common error in TypeScript when working with objects: not explicitly defining the types of object properties. The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides the corrected version.

## Problem

The original code lacks explicit type definitions for the `x` and `y` properties of the `pt` object. This can lead to unexpected behavior and runtime errors if the object is not correctly structured.

## Solution

The solution is to explicitly define the types of the `x` and `y` properties using an interface or type alias. This ensures type safety and helps prevent errors.

## How to Run

1. Clone this repository.
2. Navigate to the repository directory.
3. Compile the TypeScript code using the command `tsc bug.ts` and `tsc bugSolution.ts`.
4. Run the compiled JavaScript code using Node.js.