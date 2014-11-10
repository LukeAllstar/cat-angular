window.cat = {};

angular.module('cat.controller', []);
angular.module('cat.template', []);

angular.module('cat.service.api', []);
angular.module('cat.service.i18n', []);

angular.module('cat.directives.i18n', ['cat.service.i18n']);
angular.module('cat.directives', ['cat.directives.i18n', 'ui.select2']);

angular.module('cat.service', ['angularSpinner', 'ngRoute', 'cat.service.api', 'cat.service.i18n']);
angular.module('cat', [
    'cat.service',
    'cat.template',
    'cat.directives',
    'cat.controller'
]);
