class login{
    constructor(usuario,password,is){
    this.usuario = ;
    this.password = ;
    }
    /*
    usuario(){
        if (this.usuario != "diego") {
            return alert("Usuario Invalido");
        } else {
            return alert("Bienvenido a la Deep Web");
        }
    }
    password(){
        if (this.password != "alor") {
            return alert("Password Incorrecto");
        } else {
            return alert("Bienvenido a la Deep Web");
        }
    }
    */
   iniciar(){
       if (this.usuario=="diego") {
           if (this.password=="alor") {
                return alert("Bienvenido a la Deep Web")
           } else {
                return alert("Password Incorrecto");
           }
       } else {
            return alert("Usuario Incorrecto");
       }
   }
}

function iniciarS() {
    var sesion = new login(
        document.getElementById("user").value,
        document.getElementById("pass").value);

        sesion.document.getElementById("boton").value=iniciar();
}