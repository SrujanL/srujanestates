// ================================
// Srujan Estates - Main JavaScript
// ================================

// Current Year
document.getElementById("year").textContent = new Date().getFullYear();


// ================================
// Mobile Menu
// ================================
const burgerBtn = document.getElementById("burgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

burgerBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });
});


// ================================
// Hero Spotlight Effect
// ================================
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = window.matchMedia("(hover:none),(pointer:coarse)").matches;

if (!prefersReducedMotion && !isTouch) {

    const heroVisual = document.querySelector(".hero-visual");

    if(heroVisual){

        heroVisual.addEventListener("mousemove",(e)=>{

            const rect = heroVisual.getBoundingClientRect();

            heroVisual.style.setProperty(
                "--mx",
                ((e.clientX-rect.left)/rect.width*100)+"%"
            );

            heroVisual.style.setProperty(
                "--my",
                ((e.clientY-rect.top)/rect.height*100)+"%"
            );

        });

    }

}


// ================================
// Card Hover Animation
// ================================
document.querySelectorAll(".prop-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-6px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="";

    });

});


// ================================
// Tilt Animation
// ================================
function attachTilt(selector,strength){

    if(prefersReducedMotion || isTouch) return;

    document.querySelectorAll(selector).forEach(card=>{

        card.addEventListener("mousemove",(e)=>{

            const r=card.getBoundingClientRect();

            const px=(e.clientX-r.left)/r.width-0.5;
            const py=(e.clientY-r.top)/r.height-0.5;

            card.style.transform=
            `perspective(900px)
             rotateX(${(-py*strength).toFixed(2)}deg)
             rotateY(${(px*strength).toFixed(2)}deg)
             translateY(-6px)`;

        });

        card.addEventListener("mouseleave",()=>{

            card.style.transform="";

        });

    });

}

attachTilt(".why-card",3);
attachTilt(".test-card",3);


// ================================
// Button Magnetic Effect
// ================================
if(!prefersReducedMotion && !isTouch){

document.querySelectorAll(".btn-primary,.btn-gold").forEach(btn=>{

btn.addEventListener("mousemove",(e)=>{

const r=btn.getBoundingClientRect();

const x=(e.clientX-r.left-r.width/2)*0.18;
const y=(e.clientY-r.top-r.height/2)*0.3;

btn.style.transform=
`translate(${x}px,${y-3}px) scale(1.02)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="";

});

});

}


// ================================
// Reveal Animation
// ================================
const reveals=document.querySelectorAll(".reveal");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("in");

observer.unobserve(entry.target);

}

});

},{
threshold:0.12
});

reveals.forEach(item=>observer.observe(item));


// ================================
// Enquiry Popup
// ================================
function openEnquiry(project){

document.getElementById("enquiryTitle").textContent=project;

document.getElementById("enquiryModal").classList.add("open");

}

window.openEnquiry=openEnquiry;


// Close popup
document.getElementById("closeEnquiry").addEventListener("click",()=>{

document.getElementById("enquiryModal").classList.remove("open");

});


// Close popup when clicking outside
document.getElementById("enquiryModal").addEventListener("click",(e)=>{

if(e.target.id==="enquiryModal"){

document.getElementById("enquiryModal").classList.remove("open");

}

});


// ================================
// Enquiry Form
// ================================
document.getElementById("enquiryForm").addEventListener("submit",(e)=>{

e.preventDefault();

const msg=document.getElementById("enquiryMsg");

msg.textContent="Thank you! We'll contact you shortly.";

msg.className="form-msg show ok";

e.target.reset();

setTimeout(()=>{

document.getElementById("enquiryModal").classList.remove("open");

msg.className="form-msg";

},1800);

});


// ================================
// Contact Form
// ================================
document.getElementById("leadForm").addEventListener("submit",(e)=>{

e.preventDefault();

const msg=document.getElementById("leadMsg");

msg.textContent="Thanks! We will contact you soon.";

msg.className="form-msg show ok";

e.target.reset();

});


// ================================
// Website Ready
// ================================
console.log("Srujan Estates Loaded Successfully");

// ======================================
// Premium Card Entrance Animation
// ======================================

const cards = document.querySelectorAll(".prop-card");

const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-card");

            cardObserver.unobserve(entry.target);

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    cardObserver.observe(card);

});

// =====================================================
// PROJECT DETAILS POPUP
// =====================================================


// -----------------------------------------------------
// PROJECT DATABASE
// Add / edit project details here.
// -----------------------------------------------------

const projectDetails = {

    "bhogapuram-airport": {

        name: "Bhogapuram Airport Residency",

        location: "Bhogapuram, Visakhapatnam",

        developer: "Swathi Promoters",

        plotSizes: "200 | 267 | 300 Sq.Yards",

        approval: "VMRDA Approved",

        rera: "AP RERA Registered",

        loan: "Bank Loan Available",


        // GALLERY IMAGES
        gallery: [
            "images/bhogapuram.jpg",
            "images/bhogapuram-2.jpg",
            "images/bhogapuram-3.jpg",
            "images/bhogapuram-4.jpg"
        ],


        // AMENITIES
        amenities: [
            "Black Top Roads",
            "Underground Drainage",
            "Avenue Plantation",
            "Electricity",
            "Street Lights",
            "Water Facility"
        ],


        // LOCATION ADVANTAGES
        locationHighlights: [
            "Near Bhogapuram International Airport",
            "Easy access to NH-16",
            "Rapidly developing investment corridor",
            "Good connectivity to Visakhapatnam"
        ],


        // LAYOUT HIGHLIGHTS
        layoutHighlights: [
            "VMRDA Approved Layout",
            "Clear Title",
            "Well-planned internal roads",
            "Residential Open Plots",
            "Ready for Registration"
        ],


        // PROJECT INFORMATION
        projectInfo: [
            "Property Type: Open Plots",
            "Developer: Swathi Promoters",
            "Price: Call For Price",
            "Site Visit Available"
        ],


        // IMPORTANT:
        // Use YouTube EMBED URL
        youtube:
        "https://www.youtube.com/embed/YOUR_VIDEO_ID",


        // WhatsApp enquiry message
        whatsapp:
        "Hi Srujan Estates, I'm interested in Bhogapuram Airport Residency. Please share complete details and arrange a site visit."

    },



    // =================================================
    // PROJECT 2
    // =================================================

    "vaarahi-ainada": {

        name: "Vaarahi Ainada Township",

        location: "Ainada, Vizianagaram",

        developer: "Swathi Promoters",

        plotSizes: "200 | 267 | 300 Sq.Yards",

        approval: "VMRDA Approved",

        rera: "AP RERA Registered",

        loan: "Bank Loan Available",

        gallery: [
            "images/vaarahi-ainada.jpg"
        ],

        amenities: [
            "Black Top Roads",
            "Underground Drainage",
            "Avenue Plantation",
            "Electricity",
            "Street Lights"
        ],

        locationHighlights: [
            "Good connectivity to Vizianagaram",
            "Developing residential corridor",
            "Easy road connectivity"
        ],

        layoutHighlights: [
            "VMRDA Approved Layout",
            "Residential Open Plots",
            "Clear Documentation",
            "Ready for Registration"
        ],

        projectInfo: [
            "Property Type: Open Plots",
            "Developer: Swathi Promoters",
            "Price: Call For Price",
            "Site Visit Available"
        ],

        youtube:
        "https://www.youtube.com/embed/YOUR_VIDEO_ID",

        whatsapp:
        "Hi Srujan Estates, I'm interested in Vaarahi Ainada Township. Please share complete details and arrange a site visit."

    },



    // =================================================
    // PROJECT 3
    // =================================================

    "luckie-konada-2": {

        name: "Luckie Township @ Konada 2",

        location: "Konada, Visakhapatnam",

        developer: "Swathi Promoters",

        plotSizes: "200 | 267 | 300 Sq.Yards",

        approval: "VMRDA Approved",

        rera: "AP RERA Registered",

        loan: "Bank Loan Available",

        gallery: [
            "images/vaarahi-ainada.jpg"
        ],

        amenities: [
            "Black Top Roads",
            "Electricity",
            "Street Lights",
            "Avenue Plantation"
        ],

        locationHighlights: [
            "Strategic location",
            "Good road connectivity",
            "Growing residential zone"
        ],

        layoutHighlights: [
            "VMRDA Approved",
            "Clear Documentation",
            "Residential Open Plots",
            "Ready for Registration"
        ],

        projectInfo: [
            "Property Type: Open Plots",
            "Developer: Swathi Promoters",
            "Price: Call For Price",
            "Site Visit Available"
        ],

        youtube:
        "https://www.youtube.com/embed/YOUR_VIDEO_ID",

        whatsapp:
        "Hi Srujan Estates, I'm interested in Luckie Township at Konada 2. Please share complete details and arrange a site visit."

    },



    // =================================================
    // PROJECT 4
    // =================================================

    "bhogapuram-luckie": {

        name: "Bhogapuram Luckie Township",

        location: "Bhogapuram, Visakhapatnam",

        developer: "Swathi Promoters",

        plotSizes: "200 | 267 | 300 Sq.Yards",

        approval: "VMRDA Approved",

        rera: "AP RERA Registered",

        loan: "Bank Loan Available",

        gallery: [
            "images/vaarahi-ainada.jpg"
        ],

        amenities: [
            "Black Top Roads",
            "Underground Drainage",
            "Electricity",
            "Avenue Plantation"
        ],

        locationHighlights: [
            "Near Bhogapuram growth corridor",
            "Airport connectivity",
            "Easy highway access"
        ],

        layoutHighlights: [
            "VMRDA Approved",
            "Residential Open Plots",
            "Clear Documentation",
            "Ready for Registration"
        ],

        projectInfo: [
            "Property Type: Open Plots",
            "Developer: Swathi Promoters",
            "Price: Call For Price",
            "Site Visit Available"
        ],

        youtube:
        "https://www.youtube.com/embed/YOUR_VIDEO_ID",

        whatsapp:
        "Hi Srujan Estates, I'm interested in Bhogapuram Luckie Township. Please share complete details and arrange a site visit."

    }

};



// =====================================================
// MODAL ELEMENTS
// =====================================================

const projectModal =
document.getElementById("projectModal");

const projectModalClose =
document.getElementById("projectModalClose");

const modalProjectName =
document.getElementById("modalProjectName");

const modalLocation =
document.getElementById("modalLocation");

const modalDeveloper =
document.getElementById("modalDeveloper");

const modalPlotSizes =
document.getElementById("modalPlotSizes");

const modalApproval =
document.getElementById("modalApproval");

const modalRera =
document.getElementById("modalRera");

const modalLoan =
document.getElementById("modalLoan");

const modalMainImage =
document.getElementById("modalMainImage");

const modalGallery =
document.getElementById("modalGallery");

const modalAmenities =
document.getElementById("modalAmenities");

const modalLocationHighlights =
document.getElementById("modalLocationHighlights");

const modalLayoutHighlights =
document.getElementById("modalLayoutHighlights");

const modalProjectInfo =
document.getElementById("modalProjectInfo");

const modalYoutube =
document.getElementById("modalYoutube");

const modalWhatsapp =
document.getElementById("modalWhatsapp");



// =====================================================
// HELPER: CREATE LIST
// =====================================================

function createProjectList(element, items){

    element.innerHTML = "";

    items.forEach(item => {

        const li = document.createElement("li");

        li.innerHTML =
        `<i class="fas fa-circle-check"></i>
         <span>${item}</span>`;

        element.appendChild(li);

    });

}



// =====================================================
// OPEN PROJECT POPUP
// =====================================================

document.querySelectorAll(".details-btn").forEach(button => {

    button.addEventListener("click", () => {

        const projectID =
        button.dataset.project;

        const project =
        projectDetails[projectID];


        if(!project){

            console.error(
                "Project not found:",
                projectID
            );

            return;

        }


        // BASIC DETAILS

        modalProjectName.textContent =
        project.name;

        modalLocation.textContent =
        project.location;

        modalDeveloper.textContent =
        `Developed by ${project.developer}`;

        modalPlotSizes.textContent =
        project.plotSizes;

        modalApproval.textContent =
        project.approval;

        modalRera.textContent =
        project.rera;

        modalLoan.textContent =
        project.loan;



        // =============================================
        // GALLERY
        // =============================================

        modalGallery.innerHTML = "";


        if(project.gallery.length){

            modalMainImage.src =
            project.gallery[0];

        }


        project.gallery.forEach((image, index) => {

            const thumb =
            document.createElement("button");

            thumb.type = "button";

            thumb.className =
            "gallery-thumb";


            if(index === 0){

                thumb.classList.add("active");

            }


            thumb.innerHTML =
            `<img src="${image}"
                  alt="${project.name} gallery image">`;


            thumb.addEventListener("click", () => {

                modalMainImage.src =
                image;


                document
                .querySelectorAll(".gallery-thumb")
                .forEach(item =>
                    item.classList.remove("active")
                );


                thumb.classList.add("active");

            });


            modalGallery.appendChild(thumb);

        });



        // =============================================
        // DETAILS
        // =============================================

        createProjectList(
            modalAmenities,
            project.amenities
        );

        createProjectList(
            modalLocationHighlights,
            project.locationHighlights
        );

        createProjectList(
            modalLayoutHighlights,
            project.layoutHighlights
        );

        createProjectList(
            modalProjectInfo,
            project.projectInfo
        );



        // =============================================
        // YOUTUBE
        // =============================================

        modalYoutube.src =
        project.youtube;



        // =============================================
        // WHATSAPP
        // =============================================

        const phone =
        "916371767775";

        modalWhatsapp.href =
        `https://wa.me/${phone}?text=${encodeURIComponent(project.whatsapp)}`;



        // =============================================
        // OPEN
        // =============================================

        projectModal.classList.add("open");

        document.body.classList.add(
            "modal-open"
        );

    });

});



// =====================================================
// CLOSE PROJECT POPUP
// =====================================================

function closeProjectModal(){

    projectModal.classList.remove("open");

    document.body.classList.remove(
        "modal-open"
    );


    // Stop YouTube playback when popup closes

    modalYoutube.src = "";

}



// Close using X

projectModalClose.addEventListener(
    "click",
    closeProjectModal
);



// Close by clicking dark background

projectModal.addEventListener(
    "click",
    event => {

        if(event.target === projectModal){

            closeProjectModal();

        }

    }
);



// Close using ESC key

document.addEventListener(
    "keydown",
    event => {

        if(
            event.key === "Escape" &&
            projectModal.classList.contains("open")
        ){

            closeProjectModal();

        }

    }
);

// ============================================================
// SRUJAN ESTATES - HERO PROJECT CAROUSEL
// ============================================================

const heroCarousel = document.getElementById("heroCarousel");

if (heroCarousel) {

    const heroSlides =
        heroCarousel.querySelectorAll(".hero-slide");

    const heroDots =
        heroCarousel.querySelectorAll(".hero-dot");

    const heroPrev =
        document.getElementById("heroPrev");

    const heroNext =
        document.getElementById("heroNext");

    const heroExploreButtons =
        heroCarousel.querySelectorAll(".hero-explore-btn");


    // ========================================================
    // CAROUSEL SETTINGS
    // ========================================================

    let currentHeroSlide = 0;

    let heroAutoPlay;

    const heroSlideInterval = 3000;


    // ========================================================
    // SHOW A SPECIFIC SLIDE
    // ========================================================

    function showHeroSlide(index) {

        // Loop back to first slide
        if (index >= heroSlides.length) {
            index = 0;
        }

        // Loop back to last slide
        if (index < 0) {
            index = heroSlides.length - 1;
        }


        // Remove active class from everything
        heroSlides.forEach(slide => {
            slide.classList.remove("active");
        });


        heroDots.forEach(dot => {
            dot.classList.remove("active");
        });


        // Activate selected slide
        heroSlides[index].classList.add("active");

        if (heroDots[index]) {
            heroDots[index].classList.add("active");
        }


        currentHeroSlide = index;
    }


    // ========================================================
    // NEXT SLIDE
    // ========================================================

    function nextHeroSlide() {

        showHeroSlide(
            currentHeroSlide + 1
        );

    }


    // ========================================================
    // PREVIOUS SLIDE
    // ========================================================

    function previousHeroSlide() {

        showHeroSlide(
            currentHeroSlide - 1
        );

    }


    // ========================================================
    // AUTO PLAY
    // ========================================================

    function startHeroAutoPlay() {

        stopHeroAutoPlay();

        heroAutoPlay = setInterval(
            nextHeroSlide,
            heroSlideInterval
        );

    }


    function stopHeroAutoPlay() {

        if (heroAutoPlay) {

            clearInterval(heroAutoPlay);

            heroAutoPlay = null;

        }

    }


    // ========================================================
    // NEXT BUTTON
    // ========================================================

    if (heroNext) {

        heroNext.addEventListener(
            "click",
            () => {

                nextHeroSlide();

                startHeroAutoPlay();

            }
        );

    }


    // ========================================================
    // PREVIOUS BUTTON
    // ========================================================

    if (heroPrev) {

        heroPrev.addEventListener(
            "click",
            () => {

                previousHeroSlide();

                startHeroAutoPlay();

            }
        );

    }


    // ========================================================
    // NAVIGATION DOTS
    // ========================================================

    heroDots.forEach(
        (dot, index) => {

            dot.addEventListener(
                "click",
                () => {

                    showHeroSlide(index);

                    startHeroAutoPlay();

                }
            );

        }
    );


    // ========================================================
    // PAUSE WHEN MOUSE IS OVER CAROUSEL
    // ========================================================

    heroCarousel.addEventListener(
        "mouseenter",
        () => {

            stopHeroAutoPlay();

        }
    );


    // ========================================================
    // RESUME WHEN MOUSE LEAVES
    // ========================================================

    heroCarousel.addEventListener(
        "mouseleave",
        () => {

            startHeroAutoPlay();

        }
    );


    // ========================================================
    // EXPLORE BUTTON
    // Opens existing Project Details popup
    // ========================================================

    heroExploreButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const projectID =
                    button.dataset.project;


                /*
                Find the matching View Details button
                from the property cards.
                */

                const matchingDetailsButton =
                    document.querySelector(
                        `.details-btn[data-project="${projectID}"]`
                    );


                if (matchingDetailsButton) {

                    /*
                    Trigger the existing project modal
                    system that we already built.
                    */

                    matchingDetailsButton.click();

                }

                else {

                    console.warn(
                        `No matching project found for: ${projectID}`
                    );

                }

            }
        );

    });


    // ========================================================
    // OPTIONAL TOUCH / SWIPE SUPPORT
    // ========================================================

    let heroTouchStartX = 0;

    let heroTouchEndX = 0;


    heroCarousel.addEventListener(
        "touchstart",
        event => {

            heroTouchStartX =
                event.changedTouches[0].screenX;

            stopHeroAutoPlay();

        },
        {
            passive: true
        }
    );


    heroCarousel.addEventListener(
        "touchend",
        event => {

            heroTouchEndX =
                event.changedTouches[0].screenX;


            handleHeroSwipe();


            startHeroAutoPlay();

        },
        {
            passive: true
        }
    );


    function handleHeroSwipe() {

        const swipeDistance =
            heroTouchStartX -
            heroTouchEndX;


        /*
        Ignore tiny accidental finger movement.
        */

        if (
            Math.abs(swipeDistance) < 50
        ) {

            return;

        }


        // Swipe left = next
        if (swipeDistance > 0) {

            nextHeroSlide();

        }


        // Swipe right = previous
        else {

            previousHeroSlide();

        }

    }


    // ========================================================
    // PAUSE CAROUSEL IF BROWSER TAB IS HIDDEN
    // ========================================================

    document.addEventListener(
        "visibilitychange",
        () => {

            if (document.hidden) {

                stopHeroAutoPlay();

            }

            else {

                startHeroAutoPlay();

            }

        }
    );


    // ========================================================
    // INITIALISE CAROUSEL
    // ========================================================

    showHeroSlide(0);

    startHeroAutoPlay();

}