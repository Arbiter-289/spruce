function cat(){
    text1 = document.getElementById("doggy");
    console.log("Etiqueta cambiada con exito: " + text1);
    text1.innerHTML = "Michu";
}

function dog(){
    text2 = document.getElementById("doggy");
    console.log("Etiqueta cambiada con exito: " + text2);
    text2.innerHTML = "Balu";
}

function addText(){
    const text = document.getElementById("script");
    console.log("Script");
    text.innerHTML = "<i>It's over Anakin, i have the high ground</i>";
}

function removeText(){
    const text = document.getElementById("script");
    if(text){
        text.innerHTML = "";
        console.log("the line was deleted")
    } else {
        console.war("Element with ID 'script' not found. Cannot remove line.");
    }
}

function wallpaper(){
    //wallpaper
    const wall = document.getElementById("wallpaper");
    if(wall){
        wall.style.backgroundImage = "url(img/dirt-background.png)";
        wall.style.backgroundPosition =  "center";
        wall.style.backgroundRepeat = "no-repeat";
        wall.style.minHeight  =  "100vh";
        wall.style.backgroundSize = "cover";
        console.log("The wallpaper was changed with success!");

    }else {
        const fail = new Error("the wallpapaer was not found");
        console.log(fail);
    }
    

    // header color
    const encabezado = document.getElementById("encabezado");
    encabezado.style.backgroundColor = '#4f2c16';

    //logo
    const logo = document.querySelector("div a img#image");
    if(logo){
        img.src = "img/grass-block.png";
        console.log("logo was changed with success")
    }else {
       const fail =  new Error("Image was not found"); 
       console.log(fail);
    }
    const title = document.querySelector("#title-logo");
    if(title){
        title.innerHTML = 'GRASS';
        console.log("The title's change was a success!");
    }else {
        const fail = new Error("The title was not found");
        console.log(fail);
    }
    }

    function removeWallpaper(){
    //Wallpaper
    const wall = document.getElementById("wallpaper");
    if(wall){
        wall.style.backgroundImage = "url(img/wall.png)";
        wall.style.backgroundPosition =  "center";
        wall.style.backgroundRepeat = "no-repeat";
        wall.style.minHeight  =  "100vh";
        wall.style.backgroundSize = "cover";
        console.log("The wallpaper's reestablished was a success!");
    }else {
        const fail = new Error("The wallpaper was not found");
    }
    

    // header color
    const encabezado = document.getElementById("encabezado");
    encabezado.style.backgroundColor = "rgb(130, 223, 36)";

    //logo
    const logo = document.querySelector("div a img#image");
    if(logo){
        img.src = "img/dirt.png";
        console.log("logo was reestablished with success")
    }else {
       const fail =  new Error("Image was not found"); 
       console.log(fail);
    }
    const title = document.querySelector("#title-logo");
    if(title){
        title.innerHTML = 'DIRT';
        console.log("The title's reestablished was a success!");

    }else {
        const fail = new Error("The title was not found");
        console.log(fail);
    }
    }

    let cont = 0;
    function changeWallpaper(){
    cont++;
    if(cont==1){
    wallpaper();
    }else {
    removeWallpaper();
    cont=0;
    }
    }