import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Formulario.css"

export function Formulario(){

    const[vercedula,guardarCedula]=useState("")
    const[vercontraseña,guardarContraseña]=useState("")

    // para navegar entre componentes debo declarar una variable que almacene el hook
    let enrutador=useNavigate()
    

    function procesarFormulario(evento){
        // que hago si le hacen clic al boton del formulario
        evento.preventDefault()
        // console.log("le hicieron clic al boton de formulario")
        
        // voy a enrutar otro componente(¿como lanzo un componente desde otro?)
        enrutador("/home")
        
    }

    return(
        <>
        <section className="container" >
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-6">
                    <img src="../../src/assets/logo sura.webp" alt=""className="img-fluid" />
                    <form className="border rounded p-4" onSubmit={procesarFormulario}>
                        <h2 className="fuente">Controla tu Salud</h2>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Número Cedula" 
                            id="identificacion"
                            onChange={function(evento){
                                guardarCedula(evento.target.value)
                            }}
                        />
                        </div>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i></span>
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Contraseña"
                            id="contraseña"
                            onChange={function(evento){
                                guardarContraseña(evento.target.value)
                            }} 
                            />
                        </div>
                        <button type="submit" class="fondoboton">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )}