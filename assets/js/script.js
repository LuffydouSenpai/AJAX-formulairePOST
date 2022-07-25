console.dir(document.forms.login); //document.forms['login']
console.dir(document.forms.login['log'].value);
const loginForm = document.forms.login;
loginForm.addEventListener("submit",(e)=>{
    //prevent empeche le submit de mon formulaire (l'action est ignorée)
    e.preventDefault();
    console.log("Ca marche");
    let log = loginForm['log'].value;
    let pwd = loginForm['pwd'].value;
    fetch("./admin/traitement.php",{
         method: "POST", //definir la method
        headers: {'Content-Type': 'application/x-www-form-urlencoded'}, //definir le type d'encodage de mes variables
        body: `log=${log}&pwd=${pwd}`//definir mes variable avec body
    })
    .then((response)=>response.text())
    .then((texte)=>{
        console.log(texte)
    })
})