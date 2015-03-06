var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    'app': 'app/scripts/app',
    'angular-animate': 'bower_components/angular-animate/angular-animate',
    'angular': 'bower_components/angular/angular',
    'angular-mocks': 'bower_components/angular-mocks/angular-mocks'
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-animate': {
      deps: ['angular']
    },
    'angular-mocks': {
      deps: ['angular']
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
