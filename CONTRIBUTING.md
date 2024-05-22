This project is a monorepo managed using [Yarn workspaces](https://yarnpkg.com/features/workspaces). It contains the following packages:

- An example app in the `apps/sample-app/` directory.
- The core library in the `packages/core/` directory.
- Provider packages in the `packages/plugin-*/` directories.

To get started with the project, run the following command in the root directory to install the required dependencies for each package:

```bash
yarn install
```

Next, you need to build the packages by running the following command:

```bash
yarn build
```

## Sample app

The [sample app](https://github.com/openmobilehub/react-native-omh-auth/tree/main/apps/sample-app) demonstrates usage of the library. You need to run it to test any changes you make.

It is configured to use the local version of the library, so any changes you make to the library's source code will be reflected in the example app. Changes to the library's JavaScript code will be reflected in the example app without a rebuild, but native code changes will require a rebuild of the example app.

To edit the Java or Kotlin files, open `apps/sample-app/android` in Android studio and find the source files at `omh_react-native-auth-*` under `Android`.

### Providers setup

Create files from templates that contain secrets for specific providers. If you don't want to setup certain providers, you can leave their values empty.

```bash
# In apps/sample-app/android
cp local.properties.sample local.properties
```

```bash
# In apps/sample-app
cp .env.sample .env
```

### Starting the sample app

You can use various commands from the root directory to work with the project.

To start the packager:

```bash
yarn workspace react-native-omh-auth-sample start
```

To run the example app on Android:

```bash
yarn workspace react-native-omh-auth-sample android
```

To run the example app on iOS:

```bash
yarn workspace react-native-omh-auth-sample ios
```

## Linting

We use [TypeScript](https://www.typescriptlang.org) for type checking, [ESLint](https://eslint.org) with [Prettier](https://prettier.io) for linting and formatting the code.

Make sure your code passes TypeScript and ESLint. Run the following to verify:

```bash
yarn lint
yarn typecheck
```

To fix formatting errors, run the following:

```bash
yarn lint --fix
```

## Tests

We use [Jest](https://jestjs.io) for testing. Our pre-commit hooks verify that the linter and tests pass when committing.

Remember to add tests for your change if possible. Run the unit tests by:

```bash
yarn test
```

## Writing documentation

Documentation is located under [`/docs/`](https://github.com/openmobilehub/react-native-omh-auth/tree/main/docs). We use [Docusaurus](https://docusaurus.io) to generate the documentation website and [docusaurus-plugin-typedoc](https://www.npmjs.com/package/docusaurus-plugin-typedoc) to generate API documentation from TypeScript docstrings. The API documentation is built automatically with Github Actions and published on GitHub Pages upon merging to the `main` branch with [this workflow file](https://github.com/openmobilehub/react-native-omh-auth/tree/main/.github/workflows/cd.yml).

Remember to document your code according to [JSDoc reference](https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html) and to write proper Markdown documentation manually when needed in the `/docs/docs/` directory.

You can view information about the documentation and its scripts in the [README](https://github.com/openmobilehub/react-native-omh-auth/tree/main/docs/README.md). To simply run documentation locally, you can run:

```bash
yarn workspace docs start
```

## Publishing to npm

To publish new version to the NPM we use `lerna`. Packages are published automatically after merging a commit that contains a version bump.

1. Run `yarn version:bump`
2. Create PR with a new version
3. After merging the PR with a version bump, package will be released automatically and a corresponding git tag will be created by the Github Actions Workflow

## Commit message convention

We follow the [conventional commits specification](https://www.conventionalcommits.org/en) for our commit messages:

- `fix`: bug fixes, e.g. fix crash due to deprecated method.
- `feat`: new features, e.g. add new method to the module.
- `refactor`: code refactor, e.g. migrate from class components to hooks.
- `docs`: changes into documentation, e.g. add usage example for the module..
- `test`: adding or updating tests, e.g. add integration tests using detox.
- `chore`: tooling changes, e.g. change CI config.

Our pre-commit hooks verify that your commit message matches this format when committing.

## Sending a pull request

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://app.egghead.io/playlists/how-to-contribute-to-an-open-source-project-on-github).

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that linters and tests are passing.
- Review the documentation to make sure it looks good.
- Follow the pull request template when opening a pull request.
- For pull requests that change the API or implementation, discuss with maintainers first by opening an issue.
