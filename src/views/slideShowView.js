import * as ViewFunctions from './view.js'
import * as Service from '../services/services.js'

let slideIndex = 1;

export function plusSlides(n) {
  showSlides(slideIndex += n);
}

export async function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName("slide");

  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 

export function buildSlideImage(url) {
    let attributeMap = new Map();
    attributeMap.set("src",url);
    attributeMap.set("width", "100%");

    let newImage = ViewFunctions.buildElement("img",attributeMap);
    return newImage;
}

export async function populateImages(project) {
    let slideShow = document.getElementById("slideshowImages");
    
    // Keep all navigation elements
    const navigation = Array.from(slideShow.children).filter(child => 
        !child.classList.contains('slide')
    );
    
    slideShow.querySelectorAll('.slide').forEach(slide => slide.remove());
    
    let stills = project.projectStills;
    stills.forEach(still => {
        let slide = ViewFunctions.buildDivContainer("slide");
        let image = buildSlideImage(still);
        slide.style.display = "none";
        slide.append(image);
        slideShow.append(slide);
    });

    navigation.forEach(navButton => {
        slideShow.append(navButton);
    });
    
    slideShow.children[0].style.display = "block";
}

export async function populateDetails(project){
    let details = document.getElementById("slideshowDetails");
    details.innerHTML="";

    let title = ViewFunctions.buildTextEntry("h2", project.projectTitle);
    details.append(title);

    let client = ViewFunctions.buildTextEntry("h3", "Client: " + project.clientName);
    details.append(client);

    let category = ViewFunctions.buildTextEntry("h3", "Category: " +project.category);
    details.append(category);

    details.append(document.createElement("br"));
    let description = project.description ? ViewFunctions.buildTextEntry("p", project.description): "";
    details.append(description);

    //NOTE: Will not always be able to provide a link to a project
    if(project.projectLink !== ""){
        details.append(document.createElement("br"));
        details.append(document.createElement("br"));
        let link = ViewFunctions.buildTextEntry("a", "Watch Here");
        link.setAttribute("id", "projectLink");
        link.setAttribute("href",project.projectLink);
        details.append(link);
    }

}

export async function populateSlides(id){
    let project = await Service.getProject(id);
    populateDetails(project);
    populateImages(project);

}

export function showProjectSlideshow(id){
    const slideshowPopup = document.querySelector(".slideshowPopup");
    const slideshowOverlay = document.querySelector(".slideshowOverlay");
    populateSlides(id);
    slideshowPopup.classList.remove('hidden');
    slideshowOverlay.classList.remove('hidden');
    
}

export function closeSlideshow(){
    const slideshowPopup = document.querySelector(".slideshowPopup");
    const slideshowOverlay = document.querySelector(".slideshowOverlay");
    slideshowPopup.classList.add('hidden');
    slideshowOverlay.classList.add('hidden');
    
}
