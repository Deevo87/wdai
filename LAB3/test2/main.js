const showcases = document.querySelectorAll(".employee");
const prevButton = document.querySelector(".prev-employee");
const nextButton = document.querySelector(".next-employee");
const randomEmployee = document.querySelector(".random-employee");

const showacasesCount = showcases.length;
let currentShowcase = 0;


const getImageIndex = (number) => {
    return ((number % showacasesCount) + showacasesCount) % showacasesCount;
}

const getChangeShowcase = (indexDiff) => {
    return () => {
        const toHide = showcases[getImageIndex(currentShowcase)];
        currentShowcase += indexDiff;
        const toShow = showcases[getImageIndex(currentShowcase)];
        
        toHide.classList.remove("visible");
        toShow.classList.remove("hidden");

        toHide.classList.add("hidden");
        toShow.classList.add("visible");
    }
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

prevButton.addEventListener("click", getChangeShowcase(-1));

nextButton.addEventListener("click", getChangeShowcase(1));

randomEmployee.addEventListener("click", () => {
    const current = getImageIndex(currentShowcase);
    let diff = getRandomInt(3);
    while (getImageIndex(current + diff) == current) {
        diff = getRandomInt(3);
    }

    getChangeShowcase(diff)();
})