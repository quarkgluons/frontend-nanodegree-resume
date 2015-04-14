var bio = {
    name: "Showkat Ali",
    role: "Udacious!&lt;sic&gt;",
    contacts: {
	mobile: "+91xxxxxxxxxx",
	email: "quarkgluons@gmail.com",
	github: "https://www.github.com/quarkgluons",
	twitter: "@ali_showkat",
	location: "Kargil"
    },
    welcomeMessage: "You are most welcome to go through my resume",
    skills: ["Programmer", "Footballer", "What not!"],
    biopic: "images/my.jpg",
    display: function () {
	$('#header').prepend(HTMLheaderName.replace('%data%', bio.name) + HTMLheaderRole.replace('%data%', bio.role));
	$('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
	$('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
	//using polymer my-contacts in place of HTMLcontacts
	for (var e in bio.contacts) {
	    $('#topContacts').append(PolymerContact.replace('%contact%', e).replace('%contact%', e).replace('%data%', bio.contacts[e]));
	    $('#footerContacts').append(PolymerContact.replace('%contact%', e).replace('%contact%', e).replace('%data%', bio.contacts[e]));
	}
	$('#header').append(HTMLskillsStart);
	$('#skills').append(polymerSkills);

    }
}
var education = {
    schools: [{
	name: "SVPS",
	location: "Kargil",
	degree: "Primary Scooling",
	majors: ["Trolling"],
	dates: 1999,
	url: ""
    },
	      {
		  name: "St. Thomas College",
		  location: "Dehradun",
		  degree: "High School",
		  majors: ["Cricket", "Running", "Free-Style Party Dancing"],
		  dates: 2007,
		  url: "" 
	      },
	      { name: "Jamia Millia Islamia",
		location: "New Delhi",
		degree: "Graduation",
		majors: ["Computer Science", "Football", "College Fests"],
		dates: 2012,
		url: ""
	      }],
    onlineCourses: [{
	title: "JavaScript",
	school: "code academy",
	date: 2013,
	url: "http://www.codeacademy.org"
    },
		    { title: "Basic HTML and CSS",
		      school: "Udacity",
		      date: 2015,
		      url: "https://www.udacity.com"
		    }],
    display: function () {
	for (var school in education.schools) {
	    $('#education').append(HTMLschoolStart);
	    $('.education-entry').eq(school).append(HTMLschoolName.replace('%data%', education.schools[school].name + HTMLschoolDegree.replace('%data%', education.schools[school].degree)));
	    $('.education-entry').eq(school).append(HTMLschoolDates.replace('%data%', education.schools[school].dates));
	    $('.education-entry').eq(school).append(HTMLschoolLocation.replace('%data%', education.schools[school].location));
	    for (var major in education.schools[school].majors) {
		$('.education-entry').eq(school).append(HTMLschoolMajor.replace('%data%', education.schools[school].majors[major]));
	    }
	}
	$('.education-entry:last').append(HTMLonlineClasses);
	for (var i in education.onlineCourses) {
	    $('.education-entry:last').append(HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title + HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school)));
	    $('.education-entry:last').append(HTMLonlineDates.replace('%data%', education.onlineCourses[i].date));
	    $('.education-entry:last').append(HTMLonlineURL.replace('%data%', education.onlineCourses[i].url));
	}
    }
};

var work = {
    jobs:[{
	employer: "Hindustan Aeronautics Limited",
	title: "Engineer CS",
	location: "Bangalore, Karnataka, India",
	dates: "2013-current",
	description: "Maintain the IT department in HAL Medical & Health Unit and also develop required applications."
    }],
    display: function () {
	for (var i in work.jobs) {
	    $('#workExperience').append(HTMLworkStart);
	    $('.work-entry').eq(i).append(HTMLworkEmployer.replace('%data%', work.jobs[i].employer) + HTMLworkTitle.replace('%data%', work.jobs[i].title));
	    $('.work-entry').eq(i).append(HTMLworkDates.replace('%data%', work.jobs[i].dates));
	    $('.work-entry').eq(i).append(HTMLworkLocation.replace('%data%', work.jobs[i].location));
	    $('.work-entry').eq(i).append(HTMLworkDescription.replace('%data%', work.jobs[i].description));
	}
    }
};

var projects = { projects :[{
    title: "An LL parser which will take the grammer and a string and tell whether that string is parsable with the given grammer.",
    dates: "2012",
    description: "As part of the Compiler Design Course",
    images: []
},
			    { title: "Second",
			      dates: "",
			      description: "",
			      images: []
			    },
			    { title: "Third",
			      dates: "",
			      description: "",
			      images: []
			    }],
		 display: function () {
		     //projects.projects is an array of objects
		     //hence we need to enumerate all the objects at each index
		     for (var i in projects.projects) {
			 $('#projects').append(HTMLprojectStart);
			 $('.project-entry').eq(i).append(HTMLprojectTitle.replace('%data%', projects.projects[i].title));
			 $('.project-entry').eq(i).append(HTMLprojectDates.replace('%data%', projects.projects[i].dates));
			 $('.project-entry').eq(i).append(HTMLprojectDescription.replace('%data%', projects.projects[i].description));
			 for (var image in projects.projects[i].images)
			     $('.project-entry').eq(i).append(HTMLprojectImage.replace('%data%', projects.projects[i].images[image]));
		     }
		
		 }
	       };


function display() {
    bio.display();
    work.display();
    projects.display();
    education.display();
    $('#mapDiv').append(googleMap);
}

display();
