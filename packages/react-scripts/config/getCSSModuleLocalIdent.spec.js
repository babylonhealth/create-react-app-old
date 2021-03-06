/* globals describe, it, expect */
'use strict';

const getCSSModuleLocalIdent = require('./getCSSModuleLocalIdent.js');

describe('getCSSModuleLocalIdent', () => {
  it('should use the module name for files not named "index" or "styles"', () => {
    const output = getCSSModuleLocalIdent(
      {
        resourcePath:
          '/foo/example-project/src/components/Test/Test.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output).toEqual('example-project__Test__exampleClass');
  });

  it('should use the folder name for files named "index" or "styles"', () => {
    const output1 = getCSSModuleLocalIdent(
      {
        resourcePath:
          '/foo/example-project/src/components/Test/index.module.scss',
      },
      null,
      'exampleClass'
    );

    const output2 = getCSSModuleLocalIdent(
      {
        resourcePath:
          '/foo/example-project/src/components/Test/styles.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output1).toEqual('example-project__Test__exampleClass');
    expect(output2).toEqual('example-project__Test__exampleClass');
  });

  it('should also resolve the project name from a "lib" folder without a src', () => {
    const output = getCSSModuleLocalIdent(
      {
        resourcePath: '../../../lib/example-lib/Test/Test.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output).toEqual('example-lib__Test__exampleClass');
  });

  it('should also resolve the project name from a "lib" folder with a src folder', () => {
    const output = getCSSModuleLocalIdent(
      {
        resourcePath: '../../../lib/example-lib/src/Test/Test.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output).toEqual('example-lib__Test__exampleClass');
  });

  it('should default to "babylon" if there is no matching src or lib folder', () => {
    const output = getCSSModuleLocalIdent(
      {
        resourcePath: '../../../example-project/RandomFolder/Test.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output).toEqual('babylon__Test__exampleClass');
  });

  it('should default to "babylon" and the folder name if there is no matching src or lib folder and the file is named index or styles', () => {
    const output1 = getCSSModuleLocalIdent(
      {
        resourcePath: '../../../example-project/RandomFolder/index.module.scss',
      },
      null,
      'exampleClass'
    );

    const output2 = getCSSModuleLocalIdent(
      {
        resourcePath:
          '../../../example-project/RandomFolder/styles.module.scss',
      },
      null,
      'exampleClass'
    );

    expect(output1).toEqual('babylon__RandomFolder__exampleClass');
    expect(output2).toEqual('babylon__RandomFolder__exampleClass');
  });
});
