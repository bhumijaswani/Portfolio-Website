const skills = document.querySelector("#skills");
const projects = document.querySelector("#projects");
const achievements = document.querySelector("#achievements");
console.log(skills);
console.log(projects);
console.log(achievements);
const skillsContent = document.querySelector("#skills-content");
const projectsContent = document.querySelector("#projects-content");
const achievementsContent = document.querySelector("#achievements-content");

skills.addEventListener("click", () => {
    skillsContent.style.display = "flex";
    projectsContent.style.display = "none";
    achievementsContent.style.display = "none";
});
projects.addEventListener("click", () => {
    skillsContent.style.display = "none";
    projectsContent.style.display = "flex";
    achievementsContent.style.display = "none";
});
achievements.addEventListener("click", () => {
    skillsContent.style.display = "none";
    projectsContent.style.display = "none";
    achievementsContent.style.display = "flex";
});
function removeActive(){
    skills.classList.remove("active");
    projects.classList.remove("active");
    achievements.classList.remove("active");
}
projects.addEventListener("click", () => {
  removeActive();
  projects.classList.add("active");
  
});
skills.addEventListener("click", () => {

    removeActive();
    skills.classList.add("active");
});
achievements.addEventListener("click", () => {

    removeActive();
    achievements.classList.add("active");
});
const viewWork = document.querySelector("#view-work");

viewWork.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#explore").scrollIntoView({
        behavior: "smooth"
    });
});
function handleSend() {
    const name  = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const note  = document.getElementById('note').value.trim();

    if (!name || !email || !note) {
        alert('Please fill in all fields!');
        return;
    }

    // Replace with EmailJS / Formspree when ready
    alert(`Thanks ${name}! I'll get back to you soon 🚀`);

    document.getElementById('name').value  = '';
    document.getElementById('email').value = '';
    document.getElementById('note').value  = '';
}
projects.click();