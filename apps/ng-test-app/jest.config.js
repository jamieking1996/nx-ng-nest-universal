module.exports = {
  name: 'ng-test-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/ng-test-app',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
