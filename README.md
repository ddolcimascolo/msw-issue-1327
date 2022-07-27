# msw-issue-1327

Reproduces https://github.com/mswjs/msw/issues/1327

## Setup

Run `npm i`

## Running

Run `npm i msw@~0.43.0; npm test` to downgrade MSW and make the test pass.  
Run `npm i msw@latest; npm test` to upgrade MSW to the latest version and make the test fail.
