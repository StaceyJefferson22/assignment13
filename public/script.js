const showNintendos = async () => {
    let nintendoJSON = await getJSON();
    if (nintendoJSON == ""){
        return;
    }

    let nintendoDiv = document.getElementById("nintendo-list");

    nintendoJSON.forEach((nintendo) =>{
        let section = document.createElement("section");
        nintendoDiv.append(section);

        let h3 = document.createElement("h3");
        section.append(h3);
        h3.innerHTML = nintendo.name;

        let img = document.createElement("img");
        section.append(img);
        //https://serversidejson-drse.onrender.com/
        img.src = "https://serversidejson-drse.onrender.com/" + nintendo.img;

        let p = document.createElement("p");
        section.append(p);
        p.innerHTML = " <strong> Age: </strong>" + nintendo.age;
        p.innerHTML += "<br><strong> Job: </strong>" + nintendo.job;
        p.innerHTML += "<br><strong> Location: </strong>" + nintendo.location;
        p.innerHTML += "<br><strong> Items: </strong>" + nintendo.items;

    });
};

const getJSON = async () => {
    try{
        //http:localhost:5000/api/nintendo
        let response = await fetch("https://serversidejson-drse.onrender.com/api/nintendos");
        return await response.json();
    } catch (error){
        console.log("error retrieving json");
        return "";
    }
};

window.onload = () => {
    showNintendos();
}