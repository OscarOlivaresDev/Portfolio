let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
    }else{
        document.getElementById("nav").classList ="responsive"
        menuVisible = true;
    }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoSkills(){
    var skills = document.getElementById("skills");
    var spaceSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(spaceSkills >= 300){
        let skills = document.getElementsByClassName("progreso"); 
        skills[0].classList.add("html");
        skills[1].classList.add("css");
        skills[2].classList.add("javaScript");
        skills[3].classList.add("angular");
        skills[4].classList.add("typescript");
        skills[5].classList.add("bootstrap");
        skills[6].classList.add("figma");
        skills[7].classList.add("net");
        skills[8].classList.add("sql");
        skills[9].classList.add("comunicacion");

    }
}

window.onscroll = function(){
    efectoSkills();
} 

const $form = document.querySelector('#form');
const $buttonMailto = document.querySelector('#jugada'); 

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event){
    event.preventDefault();
    form = new FormData(this)
    console.log(form.get('name'))
    $buttonMailto.setAttribute('href', `mailto:iamoscarolivares@gmail.com?subject=${form.get('name')}${form.get('email')}${form.get('asunto')}&body=${form.get('message')}`)
    $buttonMailto.click()
}
