var t=document.querySelector(".spider"),e=document.querySelector(".wall");document.addEventListener("click",function(i){if(i.target===e){var c=i.x-i.target.offsetLeft-10-t.clientWidth/2,l=i.y-i.target.offsetTop-10-t.clientHeight/2;t.style.left="".concat(c,"px"),t.style.top="".concat(l,"px"),c<t.clientWidth/2&&(t.style.left="0"),l<t.clientHeight/2&&(t.style.top="0"),c>e.clientWidth-t.clientWidth&&(t.style.left="".concat(i.target.clientWidth-t.clientWidth,"px")),l>e.clientHeight-t.clientHeight&&(t.style.top="".concat(i.target.clientHeight-t.clientHeight,"px"))}});
//# sourceMappingURL=index.1bdb1b0f.js.map
