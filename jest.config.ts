/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
})

const config: Config = {
  
  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  
  // The test environment that will be used for testing
  testEnvironment: "jsdom",
 
  testPathIgnorePatterns: ['./.next/', './node_modules/'],
 
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)?$": "babel-jest"
    }
};

export default createJestConfig(config);
