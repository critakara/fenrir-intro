// getting the date as well as the year
var today = new Date('July, 29, 2023 12:44');
var thisYear = today.getFullYear();

// storing the footer in memory to use later
var footer = document.querySelector("footer");
// making the paragraph for copyright
var copyright = document.createElement('p');

// adding the necessary things to add my name and year
copyright.innerHTML = 'Jane Vazquez ' + thisYear;
footer.appendChild(copyright);

var skills = ["cooking", "javascript", "writing"];
var skillsSection = document.getElementById("skills");
var skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    var skill = document.createElement('li'); // why is it document instead of the specific element?
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

// ok so I'll need to inject the css dynamically via here i believe
var messageForm = document.querySelector("[name='leave_message']");
messageForm.addEventListener("submit", (submit) => {
    submit.preventDefault();
    let name = event.target.usersName;
    let email = event.target.usersEmail;
    let message = event.target.usersMessage;
    console.log(name);
    console.log(email);
    console.log(message);
    var messageSection = document.getElementById("messages");
    var messageList = messageSection.querySelector('ul');
    var newMessage = document.createElement('li');
    newMessage.innerHTML = '<a href="mailto:' +  email.value +  '">' + name.value + '</a>' + '<span>' + message.value + '</span>';
    

    // '<a href="mailto: ${email}"> ${name}</a> <span>${message}</span>';
    // '<a href="mailto: ' + email + '"> ' + name + '</a> <span>' + message + '</span>'
				
    var removeButton = document.createElement('button');
    removeButton.setAttribute('id', 'messageRemove');
    removeButton.innerHTML = "Remove"
    
    function removeMessage() {
	let entry = removeButton.parentNode;
	console.log(entry);
	entry.remove();
    }
    removeButton.addEventListener("click", removeMessage, false);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
    let head = document.querySelector('head');
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = 'css/style.css';

    head.appendChild(css);
}

			    )

fetch("https://api.github.com/users/critakara/repos", {mode: 'cors'})
    .then(function(response) {
	return response.json();
    })
    .then(function(data) {
	console.log(data);

	var repositories = data;
	

		projectSection = document.getElementById("projects");
	projectList = projectSection.querySelector('ul');

	for(let i = 0; i < repositories.length; i++) {
	    var project = document.createElement('li');
	
	    project.innerHTML = repositories[i].name;
	    projectList.appendChild(project);
	}

	let head = document.querySelector('head');
    let css = document.createElement('link');
    css.rel = 'stylesheet';
    css.type = 'text/css';
    css.href = 'css/index.css';

    head.appendChild(css);
    });
   
	


