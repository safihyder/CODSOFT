const details = document.querySelector(".details");
const dots = document.querySelector(".dots");
const list = document.querySelector(".List")
const detailItems = [...details.children]
const index = [...list.children]
var dot = [...dots.children]
const updateSectionWidth = () => {
    const sectionWidth = window.innerWidth;
    details.style.width = `${index.length * sectionWidth}px`;
    detailItems.forEach(item => {
        item.style.width = `${sectionWidth}px`;
    });
};

updateSectionWidth();
console.log(details.style.width)
window.addEventListener("resize", updateSectionWidth);

index.forEach((item, index) => {
    item.addEventListener("click", () => {
        const sectionWidth = window.innerWidth;
        details.style.transform = `translateX(-${index * sectionWidth}px)`;
        dot.forEach(d => d.classList.remove("wdot"));
        dot[index].classList.add("wdot");
    });
});
