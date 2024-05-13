# Development workflow

This project is a monorepo managed using [Bun workspaces](https://bun.sh/docs/install/workspaces). It contains the following packages:

- An example app in the `apps/sample-app/` directory.
- The core library in the `packages/react-native-auth-core/` directory.
- Provider packages in the `packages/react-native-auth-*/` directories.

To get started with the project, run the following command in the root directory to install the required dependencies for each package:

```bash
bun install
```

# Example app

The [example app](https://github.com/openmobilehub/react-native-omh-auth/tree/main/apps/sample-app/) demonstrates usage of the library. You need to run it to test any changes you make.

It is configured to use the local version of the library, so any changes you make to the library's source code will be reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a rebuild, but native code changes will require a rebuild of the example app.

To edit the Java or Kotlin files, open `apps/sample-app/android` in Android studio and find the source files at `omh_react-native-auth-*` under `Android`.

## Provider setup

Create files from templates that contain secrets for specific providers. If you don't want to setup certain providers, you can
leave values empty.

```bash
# In apps/sample-app/android
cp local.properties.sample local.properties
```

```bash
# In apps/sample-app
cp .env.sample .env
```

## Starting example app

You can use various commands from the root directory to work with the project.

To start the packager:

```bash
cd apps/sample-app && bun start
```

To run the example app on Android:

```bash
cd apps/sample-app && bun android
```

To run the example app on iOS:

```bash
cd apps/sample-app && bun ios
```

## Linting and typechecking

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```bash
bun lint
bun typecheck
```

To fix formatting errors, run the following:

```bash
bun lint --fix
```

Remember to add tests for your change if possible. Run the unit tests by:

```bash
bun test
```

## Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

## Linting and tests

We use [TypeScript](https://www.typescriptlang.org) for type checking, [ESLint](https://eslint.org) with [Prettier](https://prettier.io) for linting and formatting the code, and [Jest](https://jestjs.io) for testing.

Our pre-commit hooks verify that the linter and tests pass when committing.

## Publishing to npm

We use [release-it](https://github.com/release-it/release-it) to make it easier to publish new versions. It handles common tasks like bumping version based on semver, creating tags and releases etc.

To publish new versions, run the following:

```bash
bun release
```

## Writing documentation

Documentation is located under [`/docs/`](https://github.com/openmobilehub/react-native-omh-auth/tree/main/docs). We use [Docusaurus](https://docusaurus.io) to generate the documentation website and [docusaurus-plugin-typedoc](https://www.npmjs.com/package/docusaurus-plugin-typedoc) to generate API documentation from TypeScript docstrings. The API documentation is built automatically with Github Actions and published on GitHub Pages upon merging to the `main` branch with [this workflow file](https://github.com/openmobilehub/react-native-omh-auth/tree/main/.github/workflows/cd.yml).

Remember to document your code according to [JSDoc reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) and to write proper Markdown documentation manually when needed in the `/docs/docs/` directory.

You can view information about the documentation and its scripts in the [README](https://github.com/openmobilehub/react-native-omh-auth/tree/main/docs/README.md). To simply run documentation locally, you can run:

```bash
cd docs && bun start
```

## Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
