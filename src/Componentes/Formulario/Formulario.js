import React, {useState} from 'react';

const Formulario = (props) => {

    //Creando una variable por cada campo de mi formulario
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confiPassword, setConfiPassword] = useState("");
    const [confiPasswordError, setConfiPasswordError] = useState("");

    const [hizoSubmit, setHizoSubmit] = useState(false);
    
    const crearUsuario = e => {
        e.preventDefault(); //Prevenimos el comportamiento normal del submit de un formulario
        const nuevoUsuario = {firstName, lastName, email, password, confiPassword}; //Creando un objeto/diccionario con todas las variables que creamos previamente
        
        /*const nuevoUsuario = {nombre:firstName, apellido:lastName, edad:age};*/
        // props.setCrearUsuario(nuevoUsuario);
        console.log("Nuevo registro:", nuevoUsuario);

        

        if(firstName.length<2){
            
            setFirstNameError("El nombre debe tener al menos 2 caracteres");
        } else{
            setFirstNameError("");
        }

        if(lastName.length<2){
            
            setLastNameError("El apellido debe tener al menos 2 caracteres");
        } else{
            setLastNameError("");
        }

        if(email.length<5){
            
            setEmailError("E-mail debe tener al menos 5 caracteres");
        } else{
            setEmailError("");
        }

        if(password.length<8){
            setPasswordError("Contraseña debe tener al menos 8 caracteres");
        } else{
            setPasswordError("");
        }

        if(confiPassword !== password){
            setConfiPasswordError("la clave No coinciden");
        } else{
            setConfiPasswordError("");
        }



        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfiPassword("");
        
        setHizoSubmit(true);

    }

    const mensaje = () => {
        if(!hizoSubmit) {
            return "Por favor ingresa todos tus datos";
        } else{
            return "¡Gracias por ingresar tus datos!";
        }
    }
    
    return(
        <form className='border border-dark border border-5 rounded-3 p-3 mb-2' onSubmit={crearUsuario}>
            <div className="form-group">
                <label>Nombre:</label>
                <input className="form-control" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                {
                    firstNameError ?
                    <p style={{color:'red'}}> {firstNameError}</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Apellido:</label>
                <input className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                {
                    lastNameError ?
                    <p style={{color:'red'}}> {lastNameError}</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>E-mail:</label>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
                {
                    emailError ?
                    <p style={{color:'red'}}> {emailError}</p> :
                    ''
                }
            </div>
            <div className="form-group">
                <label>Clave:</label>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} />

            </div>{
                    passwordError ?
                    <p style={{color:'red'}}> {passwordError}</p> :
                    ''
                }
            <div className="form-group">
                <label>Confirmar Clave:</label>
                <input type="password" className="form-control" onChange={(e) => setConfiPassword(e.target.value)} value={confiPassword} />
                {
                    confiPasswordError ?
                    <p style={{color:'red'}}> {confiPasswordError}</p> :
                    ''
                }
            </div>

            <input type="submit" className="btn btn-success" value="Crear Usuario" />

            {mensaje()}

        </form>
    )
}

export default Formulario;