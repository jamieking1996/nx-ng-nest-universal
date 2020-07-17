
/* Tin Can configuration */

//
// ActivityID that is sent for the statement's object
//
TC_COURSE_ID = "https://Try.authr.it/activities/course/103895/lms";

//
// CourseName for the activity
//
TC_COURSE_NAME = {
    "en-US": "Matthew\'s Demo"
};

//
// CourseDesc for the activity
//
TC_COURSE_DESC = {
    "en-US": ""
};

//
// Pre-configured LRSes that should receive data, added to what is included
// in the URL and/or passed to the constructor function.
//
// An array of objects where each object may have the following properties:
//
//    endpoint: (including trailing slash '/')
//    auth:
//    allowFail: (boolean, default true)
//
TC_RECORD_STORES = [
	
    {
	"endpoint": "http://ec2-18-132-67-205.eu-west-2.compute.amazonaws.com/data/xAPI",
	"auth": "Basic ODdhN2Q2YzYyYmNhNTJlNzk5ODU4NzA3YjdkMWQxZmQyNjcxY2JmYjplYjRkNGJlMGY1MjllMTEzODM1NzYzOTJkYmI4MDIyZjU0ZDI4OTgz"
	} 
];
