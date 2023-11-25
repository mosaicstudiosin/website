
socials = [{
    id:"ig",
    href:"https://www.instagram.com/mosaicstudiosin/"
},
    {
        id:"lnd",
        href:"https://www.instagram.com/mosaicstudiosin/"
    },{
        id:"be",
        href:"https://www.instagram.com/mosaicstudiosin/"
    },{
        id:"x",
        href:"https://www.x.com/mosaicstudiosin/"
    }
]
socials.forEach(e => {
    document.getElementById(e.id).onclick = () => {
        window.open(e.href, "_self");
    }
})
