export class SistemaAutenticacion {
    static login(usuario,clave){
        if ("autenticable" in usuario 
            && usuario.autenticable instanceof Function) //Si autenticable esta dentro del objeto y es una instancia de una funcion..
            return (usuario.autenticable(clave)); 
        else
            return false;     
            
    }
}