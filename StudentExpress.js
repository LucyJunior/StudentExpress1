//HomeButton

var homeButton = document.querySelector(".homeButton")

function insertHomePage(){
    // remove the info from the body

    var infosection = document.querySelector("section");
infosection.remove();

    // create the about us element
let homeSection = document.createElement("section");
homeSection.innerHTML = homePage;

    // insert element into the body
    
    document.body.appendChild(homeSection);
}

homeButton.addEventListener("click", insertHomePage)


//AppartmentsButton

var appartmentsButton = document.querySelector(".appartmentsButton")

function insertAppartmentsPage(){
    // remove the info from the body

    var infosection = document.querySelector("section");
infosection.remove();

    // create the about us element
let appartmentsSection = document.createElement("section");
appartmentsSection.innerHTML = AppartmentsPage;

    // insert element into the body
    
    document.body.appendChild(appartmentsSection);
}

appartmentsButton.addEventListener("click", insertAppartmentsPage)

//SUBMENU appartments Sao Paulo

var saoPauloButton = document.querySelector(".saoPauloButton");

function insertSaoPauloPage(){

    var infoSection = document.querySelector("section");
    infoSection.remove();

let saoPauloSection = document.createElement("section");
saoPauloSection.innerHTML = saoPauloPage;

document.body.appendChild(saoPauloSection);

}

saoPauloButton.addEventListener("click", insertSaoPauloPage);

//SUBMENU appartments Madrid

var madridButton = document.querySelector(".madridButton");

function insertMadridPage(){

    var infoSection = document.querySelector("section");
    infoSection.remove();

    console.log("huuu")

let madridSection = document.createElement("section");
madridSection.innerHTML = madridPage;

document.body.appendChild(madridSection);

}

madridButton.addEventListener("click", insertMadridPage);

// SUBMENU appartments Santorini

var santoriniButton = document.querySelector(".santoriniButton");

function insertSantoriniPage(){

    var infoSection = document.querySelector("section");
    infoSection.remove();

    console.log("huuu")

let santoriniSection = document.createElement("section");
santoriniSection.innerHTML = santoriniPage;

document.body.appendChild(santoriniSection);

}

santoriniButton.addEventListener("click", insertSantoriniPage);



// //How does it work Button

var hdButton = document.querySelector(".hdButton")

function insertHdPage(){
    // remove the info from the body

    var infosection = document.querySelector("section");
infosection.remove();

console.log("this is working");

    // create the about us element
let hdSection = document.createElement("section");
hdSection.innerHTML = HowDoesItWorkPage;

    // insert element into the body
    
    document.body.appendChild(hdSection);
}

hdButton.addEventListener("click", insertHdPage)


//About us Button

var aboutUsButton = document.querySelector(".aboutUsButton")

function insertAboutUsPage(){
    // remove the info from the body

    var infosection = document.querySelector("section");
infosection.remove();

console.log("this is working");

    // create the about us element
let aboutUsSection = document.createElement("section");
aboutUsSection.innerHTML = aboutUsPage;

    // insert element into the body
    
    document.body.appendChild(aboutUsSection);
}

aboutUsButton.addEventListener("click", insertAboutUsPage)

window.addEventListener("load", insertHomePage)