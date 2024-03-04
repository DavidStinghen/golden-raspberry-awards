# Golden Raspberry Awards

This project has the following objective: Develop an interface to make it possible to read the list of nominees and winners in the Worst Film category of the Golden Raspberry Awards.

## Recommended IDE Setup

### Text editor

[VSCode](https://code.visualstudio.com/)

### Setup files

- The `./vscode/settings.json` file contains the text editor settings required for the project

## Project Setup

- Run the command below to install the project packages:

```sh
npm install
```

- This project uses the "husky" package for pre-commit code control. Run the command below to install and configure the package in the project:

```sh
npm run prepare
```

### Compile and Hot-Reload for Development

To find common bugs in components early during development the command below runs the app on StrictMode, for this reason the components will re-render an extra time, re-run Effects an extra time and be checked for usage of deprecated APIs. Check the [React StrictMode doc](https://react.dev/reference/react/StrictMode).

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

Unlike development mode, when running the app using the file generated in the build, StrictMode is not activated.
To test the app in the production version, follow the steps below:

Download the package [serve](https://www.npmjs.com/package/serve)

Run the command below

```sh
npm run build
```

Run the command below

```sh
serve -s dist
```

### Run Tests with [Vitest](https://vitest.dev/)

```sh
npm run test
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Format with [Prettier](https://prettier.io/)

```sh
npm run format
```

## Documentation

- This project uses the storybook package as a means of documenting pages and components. To view the documentation, run the command below:

```sh
npm run storybook
```
