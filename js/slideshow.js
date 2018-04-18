/*eslint-env browser*/

// HELPER FUNCTION TO GET DOM ELEMENTS
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

// SLIDESHOW OBJECT
var slideshow = {
    timer: null,
    nodes: {image: null, caption: null},
    img: {cache: [], counter: 0},
    speed: 4000,
    loadImages: function (slides) {
        "use strict";
        var image, i;
        // LOOP THROUGH OUR SLIDES ARRAY
        for (i = 0; i < slides.length; i += 1) {
            image = new Image();            // CREATE A NEW IMAGE OBJECT
            image.src = slides[i].href;     // SET THE SOURCE
            image.title = slides[i].title;  // SET THE TITLE
            this.img.cache.push(image);     // PUSH NEW IMAGE INTO TEMP ARRAY (CACHE)
        }
        return this;
    },
    startSlideShow: function (image, caption) {
        "use strict";
        this.nodes.image = image;           // SET THE TEMP IMAGE PROPERTY
        this.nodes.caption = caption;       // SET THE TEMP CAPTION PROPERTY
        // SET HOW FAST OUR SLIDE SHOW ROTATES IMAGES
        this.timer = setInterval(this.displayNextImage.bind(this), this.speed);
        return this;
    },
    displayNextImage: function () {
        "use strict";
        // CHECK AND SEE IF WE'RE AT THE END OF THE SLIDE SHOW
        if (this.img.counter === this.img.cache.length) {
            this.img.counter = 0;           // IF WE ARE, START OVER
        } else {
            this.img.counter += 1;          // OTHERWISE, GO TO NEXT SLIDE
        }
        // CREATE A NEW IMAGE OBJECT FROM THE CURRENT SLIDE IN THE CACHE
        var image = this.img.cache[this.img.counter];
        // SET THE SOURCE OF THE CURRENT IMAGE
        this.nodes.image.src = image.src;
        // SET THE TITLE OF THE CURRENT IMAGE
        this.nodes.caption.innerHTML = image.title;
    }
};

window.addEventListener("load", function () {
    "use strict";
    // QUEUE UP ALL OF THE SLIDES
    var slides = [
        {href: "images/backpack.jpg", title: "He backpacks in the Sierras often."},
        {href: "images/boat.jpg", title: "He loves his boat."},
        {href: "images/camaro.jpg", title: "He loves his Camaro more."},
        {href: "images/punk.jpg", title: "He was in a punk band and toured with No Doubt and Sublime."},
        {href: "images/race.jpg", title: "He loves obstacle course racing."}
    ];
    // START THE SLIDESHOW
    // PASS IN SLIDES ARRAY INTO LOADIMAGES() FUNCTION
    // PASS IN REFERENCES TO <IMG> AND <SPAN> INTO STARTSLIDESHOW() FUNCTION
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
});