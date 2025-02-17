function skillsMember() {
    let skills = document.getElementById('skills');
    let member = document.getElementById('member');
    let memberSkills = member.getAttribute('data-skills');
    let memberSkillsArray = memberSkills.split(',');
    let ul = document.createElement('ul');
    ul.classList.add('member-skills');
    member.appendChild(ul);
    memberSkillsArray.forEach(skill => {
        let li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });
    skills.appendChild(member);
}