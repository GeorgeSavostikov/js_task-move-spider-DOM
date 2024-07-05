"use strict";
const spider = document.querySelector(".spider");
const wall = document.querySelector(".wall");
document.addEventListener("click", (e)=>{
    if (e.target !== wall) return;
    const indexX = e.x - e.target.offsetLeft - 10 - spider.clientWidth / 2;
    const indexY = e.y - e.target.offsetTop - 10 - spider.clientHeight / 2;
    spider.style.left = `${indexX}px`;
    spider.style.top = `${indexY}px`;
    if (indexX < spider.clientWidth / 2) spider.style.left = "0";
    if (indexY < spider.clientHeight / 2) spider.style.top = "0";
    if (indexX > wall.clientWidth - spider.clientWidth) spider.style.left = `${e.target.clientWidth - spider.clientWidth}px`;
    if (indexY > wall.clientHeight - spider.clientHeight) spider.style.top = `${e.target.clientHeight - spider.clientHeight}px`;
});

//# sourceMappingURL=index.f75de5e1.js.map