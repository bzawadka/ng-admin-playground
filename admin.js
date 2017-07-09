var myApp = angular.module('myApp', ['ng-admin']);
myApp.config(['NgAdminConfigurationProvider', function (nga) {
    // create an admin application
    var admin = nga.application('My First Admin')
      .baseApiUrl('http://jsonplaceholder.typicode.com/'); // main API endpoint
    // create a user entity
    // the API endpoint for this entity will be 'http://jsonplaceholder.typicode.com/users/:id
    var user = nga.entity('users');
    // set the fields of the user entity list view
    user.listView().fields([
        nga.field('name'),
        nga.field('username'),
        nga.field('email')
    ]);
    // add the user entity to the admin application
    admin.addEntity(user);
    
    var post = nga.entity('posts');
    post.listView().fields([
        nga.field('id'),
        nga.field('title'),
        nga.field('userId')
    ]);
    admin.addEntity(post);

    // attach the admin application to the DOM and execute it
    nga.configure(admin);
}]);
