const gallery = document.querySelector(".gallery .gallery__grid");
const access_key = 'URsUbqNo-_8C9C3DRGKvsrSnPhAFzisz2nxCAlnE17Q';
const btnBurguer = document.querySelector(".navbar .navbar__hamburger")
const navbar = document.querySelector(".navbar__nav");

btnBurguer.addEventListener("click", function() {
    btnBurguer.classList.toggle("hamburger--3dx");
    btnBurguer.classList.toggle("is-active");
    navbar.classList.toggle("navbar__nav--mobile");
})

function photoGallery({ urls }) {
    gallery.innerHTML += `
        <div class="gallery__photo">
         <img src="${urls.regular}" class="gallery__image" alt="imagen de portafolio" />
         <div class="gallery__overlay">
                <span>creative logo</span>   
                <p>Branding</p>
         </div>
        </div>
     `;
    return gallery;
}

function getImages() {
    fetch(`https://api.unsplash.com/photos/random?client_id=${access_key}&count=16`)
        .then(res => res.json())
        .then(json => 
            {
                json.map(data => 
                    photoGallery(data)).join("\n");
            }
        )
}

getImages();