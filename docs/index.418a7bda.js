let e=0;const t=document.querySelector("#guests-slider-container"),n=document.querySelector("#guests-slider-track"),s=document.querySelectorAll(".card-guest"),r=document.querySelector("#guests-btn-prev"),c=document.querySelector("#guests-btn-next"),l=t.clientWidth/2,d=s.length,a=1*l;s.forEach((e=>{e.style.minWidth=l-20+"px"})),r.addEventListener("click",(t=>{t.preventDefault();const n=Math.abs(e)/l;e+=n>=1?a:n*l,o(),u()})),c.addEventListener("click",(t=>{t.preventDefault();const n=(Math.abs(e)+2*l)/l;e-=n>=1?a:n*l,o(),u()}));const o=()=>{n.style.transform=`translateX(${e}px)`},u=()=>{r.disabled=0===e,c.disabled=e<=-(d-2)*l};u();
//# sourceMappingURL=index.418a7bda.js.map
