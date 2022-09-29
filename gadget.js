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
.then(data => {
    const neta = document.createElement("div");
    neta.classList.add("neta");
    const d = data.reverse();
    const els = [];
    d.map((x, i) => {
        const articles = document.createElement("div");
        articles.classList.add("articles");
        const img = document.createElement("img");
        img.src = x.image;
        img.classList.add("imgn");
        const el = document.createElement("div");
        const h3 = document.createElement("h3");
        h3.innerText = x.name;
        if (i === 0) {
            const news = document.createElement("span");
            news.innerText = "New!";
            news.classList.add("new");
            h3.appendChild(news);
        }
        const iframe = document.createElement("iframe");
        iframe.frameBorder = 0;
        iframe.src = `./articles/${x.id}.txt`;
        el.appendChild(h3);
        el.appendChild(iframe);
        articles.appendChild(img);
        articles.appendChild(el);
        els.push(articles);
    });
    els.map(x => neta.appendChild(x));


})