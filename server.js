const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "index.html");
});

app.get("/api/nintendos", (req, res) => {
    const nintendos = [];
    nintendos[0] = {
        name: "Mario",
        age: 42, 
        job: "Plumber",
        location: "Mushroom Kingdom",
        items :[" Super Mushroom",
                " Fire Flower",
                " Invincibility Star",
                " Cape",
                " Boot",
                " Magic Leaf",
            ],
        img: "images/mario.png"
    };
    nintendos[1] = {
        name: "Link",
        age: 36, 
        job: "Hero of Time",
        location: "Hyrule",
        items :["Sword",
                " Shield",
                " Hookshot",
                " Fishing Rod",
                " Bombs",
                " Boomerang",
                " Ocarine of Time",
                ],
        img: "images/link.png"
    };
    nintendos[2] = {
        name: "Samaus Aran",
        age: 37, 
        job: "Bounty Hunter",
        location: "Zebes",
        items :["Morph Ball Bomb",
                " Screw Attack",
                " Ice Beam",
                " Hyper Beam",
                " Missiles",
                " Power Suit"
                ],
        img: "images/samus.png"
    };
    nintendos[3] = {
        name: "Donkey Kong",
        age: 42, 
        job: "Banana Horder",
        location: "Donkey Kong Island",
        items :[" Bananas",
                " Ammo Packs",
                " Bongos",
                " Balloons",
                " Animal Buddies"
                ],
        img: "images/donkey kong.png"
    };
    nintendos[4] = {
        name: "Pikachu",
        age: 27, 
        job: "Pocket Monster(Pokemon)",
        location: "Pokeball",
        items :[" Thunder Stone",
                " HP Potion",
                " Oran Berry",
                " Z-Crystals"
                ],
        img: "images/pikachu.png"
    };
    nintendos[5] = {
        name: "Kirby",
        age: 31, 
        job: "Star Warrior",
        location: "Mushroom Kingdom",
        items :["Star Rod",
                " Warp Star",
                " Maxim Tomato",
                " Invinicible Candy",
                " 1UP"
                ],
        img: "images/kirby.png"
    };
    //Added Fox and Kid Icarus to the roster 
    nintendos[6] = {
        name: "Fox McCloud",
        age: 30, 
        job: "Space Pilot",
        location: "Space",
        items :[" Demon Sniper Rifle",
                " Blaster",
                " Smart Bomb",
                " Homing Launcher",
                " Plasma Cannon "
                ],
        img: "images/fox.png"
    };
    nintendos[7] = {
        name: "Kid Icarus",
        age: 36, 
        job: "Space Pilot",
        location: "Space",
        items :[" Flashing Arrow",
                " Large Heart",
                " Sacred Bow",
                " Arrow of Light",
                " Mallet"
                ],
        img: "images/icarus.png"
    };

    res.json(nintendos);
});

//5000 represents local: 5000
app.listen(5000, () => {
    console.log("I am Listening");
});