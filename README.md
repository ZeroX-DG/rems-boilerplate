<h1 align='center'>REMS - React, Electron, MobX, Sass Boilerplate</h1>
<p align='center'><i>Electron boilerplate using React, React-router, MobX and Sass</i></p>

## What's in this boilerplate

This boilerplate support live reload and pack the whole app using electron builder. It also support decorator for easier development with MobX.

- [Electron](https://electronjs.org/)
- Bundler: [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/), [Electron-builder](https://github.com/electron-userland/electron-builder)
- Language: [ES6](https://babeljs.io/learn-es2015/), [Sass](http://sass-lang.com/)
- Library: [React](https://reactjs.org/), [MobX](https://mobx.js.org/)
- Lint: [ESLint](https://eslint.org/)
- Test: [Jest](https://facebook.github.io/jest/)

## Install
Clone via git using the command bellow:
```
git clone https://github.com/ZeroX-DG/rems-boilerplate.git your-project-name
```

Install all dependencies
```
npm i
```

## Development
To start the app in dev mode, you can execute the command bellow:
```
npm run dev
```

### Folder structure
```
|
|-- app // scripts for electron
|-- scripts // webpack and other config
|-- resources // fonts, images...
|-- browser // scripts for render
      |-- render // render react components
      |-- store // mobX store
```

### ESlint
```
npm run lint
npm run fix
```
### Testing
This boilerplate use [jest](https://jestjs.io/) for testing. You can run the command bellow to execute your tests located at `/test`
```
npm run test
```

## Distribute

When you're finish coding with your app, you can run the command bellow to make an installer for a specific OS:

```
npm run dist:linux // for linux
npm run dist:win // for windows
npm run dist:mac // for mac
npm run dist // all OSs
```

## Apps that used this boilerplate
- [SnippetStore](https://github.com/ZeroX-DG/SnippetStore)

## Author & Maintainer
- [Hung Nguyen](https://github.com/ZeroX-DG)

## License
MIT © [Hung Nguyen](https://github.com/ZeroX-DG)
