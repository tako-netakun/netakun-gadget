const menu = document.getElementById("menu");
const menuContent = document.getElementsByClassName("menu-content");
menu.addEventListener("mouseover", (e) => {
    e.preventDefault();
    [...menuContent].map(x => {
        x.classList.add("animated__fadeIn");
        x.classList.remove("animated__fadeOut");
    
        x.style.display = "block";
    });
});
menu.addEventListener("mouseleave", (e) => {
    e.preventDefault();
    [...menuContent].map(x => {
        x.classList.add("animated__fadeOut");
        x.classList.remove("animated__fadeIn")
        x.style.display = "none"
    });
});

const articlesbox = document.getElementById("articlesbox");
fetch("articles/all.json")
.then((x) => x.json())
.then(async data => {
    const d = data.reverse();
    const els = [];
    for (const x of data) {
        const neta = document.createElement("div");
        neta.classList.add("neta");
        const articles = document.createElement("div");
        articles.classList.add("articles");
        const img = document.createElement("img");
        img.src = x.image;
        img.classList.add("imgn");
        const el = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = x.name;
        if (data.indexOf(x) === 0) {
            const news = document.createElement("span");
            news.innerText = "New!";
            news.classList.add("new");
            h3.appendChild(news);
        }
        const p = document.createElement("p");
        const dd = await(await fetch(`./articles/${x.id}.txt`)).text();
        let expanded = false;
        p.innerText = `${dd.match(/^.{1,20}/)[0]}${dd.length > 20 ? "...":""}`;
        const e = () => {
            if (!expanded) {
                p.innerText = dd;
                expanded = true;
            } else {
                p.innerText = `${dd.match(/^.{1,20}/)[0]}${dd.length > 20 ? "...":""}`;
                expanded = false;
            }
        }
        articles.addEventListener("click", e);
        el.appendChild(h3);
        el.appendChild(p);
        articles.appendChild(img);
        articles.appendChild(el);
        neta.appendChild(articles);
        els.push(neta);
    };
    els.map(x => articlesbox.appendChild(x));

})