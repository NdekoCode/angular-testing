# AngularTesting

Why jest is better for javacript testing ?

- Zero Config
- SnapShots
- Isolated
- Great Api
- Fast and safe
- Code Coverage
- Easy Mocking
- Great Exceptions

## Steps to configure jest in angular project

- Uninstall all karma jasmine package "pnpm uninstall @types/jasmine jasmine-core karma karma-coverage karma-chrome-launcher karma-jasmine karma-jasmine-html-reporter"
- Remove test object from angular.json
- Delete Karma.conf.js file and test.ts file
- npm i jest @types/jest jest-preset-angular
- create setup.jest.ts file in /src/setup.jest.ts and in this file make "import 'jest-preset-angular/setup-jest';"
- add "types" in tsconfig.spec.json file and specify the file "/src/setup.jest.ts" in "files" keys
- Add jest configuration in package.json
- add script in package.json to run jest
