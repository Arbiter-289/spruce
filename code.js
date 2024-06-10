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

function nextStyle(){
    //wallpaper
    changeBackGround();

    // header color
    changeHeader();

    //logo
    changeLogo();

    //title-logo
    changeTitleLogo();
}

function changeBackGround(){
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
}

function changeHeader(){
    const encabezado = document.getElementById("encabezado");
    encabezado.style.backgroundColor = '#4f2c16';
}

function changeLogo(){
const logo = document.querySelector("div a img#image");
if(logo){
    img.src = "img/grass-block.png";
    console.log("logo was changed with success")
}else {
   const fail =  new Error("Image was not found"); 
   console.log(fail);
}
}

function changeTitleLogo(){
    const title = document.querySelector("#title-logo");
const boton = document.getElementsByClassName('backGround');
if(title){
    title.innerHTML = 'GRASS';
    addEventListener('mouseover', () => {
    title.classList.add('stats-change');
    });
    console.log("The title's change was a success!");
}else {
    const fail = new Error("The title was not found");
    console.log(fail);
}
}

function removeStyle(){
//Wallpaper
removeBackGround();
// header color
removeHeader();
//logo
removeLogo();
//title-logo
removeTitleLogo();
}

function removeBackGround(){
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
}

function removeHeader(){
    const encabezado = document.getElementById("encabezado");
    encabezado.style.backgroundColor = "rgb(130, 223, 36)";
}

function removeLogo(){
    const logo = document.querySelector("#image");
if(logo){
    img.src = "img/dirt.png";
    console.log("logo was reestablished with success")
}else {
   const fail =  new Error("Image was not found"); 
   console.log(fail);
}
}

function removeTitleLogo(){
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
nextStyle();
}else {
removeStyle();
cont=0;
}
}

function addAnimal() { 
    let newAnimal = document.querySelector("#newAnimal").value;
// function created by J and C
    if (newAnimal === "" || newAnimal.match (/ /) ) {
        alert("Please, enter a valid text and without white spaces");
        return;
    }

    let newObject = document.createElement("li");
    newObject.textContent = newAnimal + " ";

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.border = "none";
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.color = "#2c0202";
    deleteButton.onclick = function() { 

        newObject.remove();
    }

    newObject.appendChild(deleteButton);

    document.querySelector("#animalList").appendChild(newObject);

    document.querySelector("#newAnimal").value = ""; 
} 

// class Persona {

//      static contadorInstacias= 0;

//     constructor (name ,cedula ,day ,month ,year, work, sueldo) {
//         this.name = name ;
//         this.cedula = cedula ;
//         this.nacimiento = new date(year,month -1,day); 
//         this.work = work;
//         this.sueldo = sueldo;
//         Persona.contadorInstacias++;
        
// }

// getname(){
//     return this.name;
// }

// getcedula(){
//     return this.cedula;
// }


// getborn(){
//     return this.nacimiento;
// }


// getwork(){
//     return this.work;
// }


// getsueldo(){
//     return this.sueldo;
// }

// setname(name){
//     this.name=name;
//  }


//  setcedula(cedula){
//     this.cedula=cedula;
//  }

//  setborn(day,month,year){
//     this.nacimiento=new date(year, month-1, day);
//  }

//  setwork(work){
//     this.work=work;
//  }

//  setsueldo(sueldo){
//     this.sueldo=sueldo;
//  }
// calcularedad(){
//     const hoy = new date();
    
//     let edad=hoy.getFullYear() - this.nacimiento.getFullYear();
    
//     const mes= hoy.getMonth()- this.nacimiento.getMonth();

//     if (mes < 0 || (mes === 0 && hoy.getDate()< this.nacimiento.getDate() )) {
//         edad--;
//     } 

//     return edad;
 
//  }

//     darAumento() { 
//         this.sueldo *= 1.10;
//     }
// }
