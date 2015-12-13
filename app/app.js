var searchModule = angular.module('searchModule', ['ngRoute']);

searchModule.config(['$routeProvider',function($routeProvider){
    $routeProvider.
      when('/search', {
        templateUrl: 'views/search.html',
        controller: 'searchController'
      }).
      when('/addCategory', {
        templateUrl: 'views/addNews.htlm',
        controller: 'categoryController'
      }).
      otherwise({
        redirectTo: '/search'
      });
}])

searchModule.service('addslotUtility',function()
{
    this.parseUrl = function (url)
    {
      var  parsed_url = {}

        if (url == null || url.length == 0)
            return parsed_url;

      var  protocol_i = url.indexOf('://');
        parsed_url.protocol = url.substr(0, protocol_i);

      var  remaining_url = url.substr(protocol_i + 3, url.length);
      var  domain_i = remaining_url.indexOf('/');
        domain_i = domain_i == -1 ? remaining_url.length - 1 : domain_i;
        parsed_url.domain = remaining_url.substr(0, domain_i);
        parsed_url.path = domain_i == -1 || domain_i + 1 == remaining_url.length ? null : remaining_url.substr(domain_i + 1, remaining_url.length);

      var  domain_parts = parsed_url.domain.split('.');
        switch (domain_parts.length) {
            case 2:
                parsed_url.subdomain = null;
                parsed_url.host = domain_parts[0];
                parsed_url.tld = domain_parts[1];
                break;
            case 3:
                parsed_url.subdomain = domain_parts[0];
                parsed_url.host = domain_parts[1];
                parsed_url.tld = domain_parts[2];
                break;
            case 4:
                parsed_url.subdomain = domain_parts[0];
                parsed_url.host = domain_parts[1];
                parsed_url.tld = domain_parts[2] + '.' + domain_parts[3];
                break;
        }

        parsed_url.parent_domain = parsed_url.host + '.' + parsed_url.tld;

        return parsed_url;
    }
})