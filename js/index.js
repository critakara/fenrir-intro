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
    removeButton.innerHTML = "remove"
    
    function removeMessage() {
	let entry = removeButton.parentNode;
	console.log(entry);
	entry.remove();
    }
    removeButton.addEventListener("click", removeMessage, false);
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
}

);
