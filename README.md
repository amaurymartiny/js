[![Actions Status](https://github.com/regen-network/regen-js/workflows/CI/badge.svg?branch=main)](https://github.com/regen-network/regen-js/actions)
![GitHub License](https://img.shields.io/github/license/regen-network/regen-js)

<br /><br />

<h1 align="center">Regen-JS</h1>

<h4 align="center">
  Regen Network does JavaScript. This monorepo contains JavaScript libraries and UIs for interacting with the <a href="https://github.com/regen-network/regen-ledger">Regen Ledger</a>.
</h4>

<br /><br /><br />

_"JS" is short for runs everywhere – we actually develop in TypeScript._

## 🚧 Warning

This API is still under heavy construction, be ready for unexpected breaking changes. In particular, the Regen team is discussing with [CosmJS](https://github.com/cosmos/cosmjs) on using [`ts-proto`](https://github.com/stephenh/ts-proto) for client JS code generation across the whole Cosmos ecosystem.

## Get Started

```bash
# Clone the repo.
git clone https://github.com/regen-network/regen-js

# Install dependencies.
yarn install

# Make sure to run this command to build the `api` package, so that other
# packages can reference it. Or else, some TypeScript references won't be
# available statically.
yarn build:api
```

Then, to run the React app, just run the following command:

```bash
# Start the React app.
yarn start
```

The app should be running on http://localhost:3000.

> Pro tip 💡: everytime you modify the `@regen-network/api` package, be sure to run again `yarn build:api`, to let the other packages in the monorepo be aware of your latest changes. You can also add to `--watch` flag on this command to build on file change.

## Packages

Regen-JS consists of smaller npm packages within the [@regen-network namespace](https://www.npmjs.com/org/regennetwork), a so called monorepo. Here is the list of all packages.

| Package                                        | Description                                         | Latest                                                                                                                  |
| ---------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [`@regen-network/api`](packages/api)           | A client library interacting with the Regen Ledger. | [![npm version](https://img.shields.io/npm/v/@regen-network/api.svg)](https://www.npmjs.com/package/@regen-network/api) |
| [`@regen-network/demo-app`](packages/demo-app) | A demo React app using `@regen-network/api`.        | Not published on npm.                                                                                                   |

## Build the packages from source

To build all the packages, just run `yarn build` from the root folder. You may also build them individually by going into each package's directory, and running `yarn build` from there.
