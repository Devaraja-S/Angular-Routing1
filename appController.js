app.controller("appController",function($scope){
	

});
app.service('sharedProperties', function () {
        var property=[
    {Eid:1,Name:"Arun Kumar MN",Domain:"Java"},
    {Eid:2,Name:"Anil Kumar Desai",Domain:"Java"},
    {Eid:7,Name:"Somshekhar",Domain:"Java"},
    {Eid:3,Name:"Adarsh",Domain:"Java"},
    {Eid:4,Name:"Devraj",Domain:"Java"},
    {Eid:6,Name:"Shrinivas",Domain:"java"},
    {Eid:5,Name:"Hemanth",Domain:"Java"},
    {Eid:5,Name:"MSA",Domain:"Java"}

    ];

        return {
            getProperty: function () {
                return property;
            },
            setProperty: function(value) {
                property = value;
            }
        };
    });