const accordionTitles = document.querySelectorAll(".acc__title");

var i;

for (i = 0; i < accordionTitles.length; i++) {
    accordionTitles[i].onclick = function() {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");

        this.classList.toggle("acc__active__title")
    }
}
