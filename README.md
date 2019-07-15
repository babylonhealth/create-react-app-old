# ⚠️ This fork was created to solve specific problems within the [monoweb](https://github.com/Babylonpartners/monoweb) repo, you should not use this outside of that repo!

# Usage

The react-scripts dependency in the monoweb repo is explicitly set to use this fork in the [root package.json](https://github.com/Babylonpartners/monoweb/blob/b284e2c9bca24777f71079bcb89547b460c7948b/package.json#L106)

# What does this fork do differently?

- Extracting enviroment variables from application code during compilation time - [view code](https://github.com/Babylonpartners/create-react-app/blob/master/packages/react-scripts/config/ExtractEnvVarsPlugin.js)
- Overriding sass variables in imported packages - [view code](https://github.com/Babylonpartners/create-react-app/blob/master/packages/react-scripts/config/customAppConfig.js)
- Generating CSS module classNames - [view code](https://github.com/Babylonpartners/create-react-app/blob/master/packages/react-scripts/config/getCSSModuleLocalIdent.js)
- Adding new entry points - [view code](https://github.com/Babylonpartners/create-react-app/blob/master/packages/react-scripts/config/paths.js)

# ❌ Deprecation

We should not be using a fork of `create-react-app` it adds much confusion and misdirection to our build process. We should work out how we can replace the custom configuration here without having to fork the `create-react-app` project and work to deprecate this repo when we can.
