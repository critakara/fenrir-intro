
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
