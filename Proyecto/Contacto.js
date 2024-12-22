function VerForm (){

    let nombre = document.querySelector("#nombre").value
    let email = document.querySelector("#email").value
    let mensaje = document.querySelector("#mensaje").value
    
    if(nombre===""){
        alert(`No has introducido tu nombre`)
        console.log("No has introducido tu nombre");
    }
    else if(email===""){
        alert(`No has introducido tu email`)
        console.log("No has introducido tu email");
    }
    else if(mensaje===""){
        alert(`No has introducido tu mensaje`)
        console.log("No has introducido tu mensaje");
    }
    else{
        console.log("Formulario completado");
    }}


 



const BotonForm = document.querySelector(".enviar")

BotonForm.onClick = ()=>{
    VerForm()
}