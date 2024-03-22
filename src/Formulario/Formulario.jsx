import { useState } from "react"

import "./Formulario.css"
export function Formulario(){

    const[vercedula,modificarcedula]=useState("")
    const[vercontraseña,modificarcontraseña]=useState("")

    function procesarFormulario(){
        
    }

    return(
        <>
        <section className="container" >
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-6">
                    <img src="../../src/assets/logo sura.webp" alt=""className="img-fluid" />
                    <form className="border rounded p-4">
                        <h2 className="fuente">Controla tu Salud</h2>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-person-vcard"></i></span>
                        <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Numero Cedula" 
                            id="identificacion"
                        />
                        </div>
                        <div class="input-group mb-3 mt-5">
                        <span class="input-group-text" id="basic-addon1"><i class="bi bi-file-lock2"></i></span>
                        <input 
                            type="password" 
                            class="form-control" 
                            placeholder="Contraseña"
                            id="contraseña" 
                            />
                        </div>
                        <button type="submit" class="fondoboton">Iniciar sesión</button>
                    </form>
                </div>
            </div>
        </section>
        </>
    )}