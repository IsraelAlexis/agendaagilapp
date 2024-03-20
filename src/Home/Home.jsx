import "./Home.css"
import { inventario } from "../utils/medicamentos"

export function Home() {

// zona de manipulacion de datos

    let nombrePaciente="Israel Alexis Alzate"
    let sedePaciente="Suramericana"
    let dotorUno="Dr. Israel"
    let tipoAfiliacion="Cotizante"
    let EstadoAfiliacion="Activo"
    
    console.log(inventario)

    // a los arreglos los puedo manipular para controlar que informacion voy a presentar
    // 1.funcion de filtrado de datos
    // condicion de filtrado(pregunta(si/no))
    let resultado=inventario.filter(function(auxiliar){
        return(auxiliar.nombre=="acetaminofen" && auxiliar.dosis)
    })
    console.log(resultado)

    

    return (
//  zona de renderizado
        <>
           <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h3 className="fuente">Servicios a un clic</h3>
                        <h2 className="text-muted">HOLA <span className="fuente">{nombrePaciente}</span></h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, enim accusantium? Facilis alias, earum in, veritatis dicta accusamus sunt, illum quod officia necessitatibus asperiores. Quae suscipit nostrum, molestiae autem cupiditate est nihil voluptate, dolorem quasi cumque eius! Id ab reiciendis ad ullam dignissimos cumque inventore dicta quia, nostrum rem fugiat?
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Tu Grupo Familiar</option>
                        <option value="1">one</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div className="row mt-5">
                        <div className="col-12 col-md-2"><i class="bi bi-person-arms-up fs-1 fuente "></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Especialista</h4>
                        <p>{dotorUno}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                    <div className="col-12 col-md-2"><i class="bi bi-person-circle fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Tipo Afiliacion</h4>
                        <p>{tipoAfiliacion}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                    <div className="col-12 col-md-2"><i class="bi bi-briefcase-fill fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Estado Afiliacion</h4>
                        <p>{EstadoAfiliacion}</p>
                        </div>
                        <hr />
                    </div>
                    <div className="row mt-2">
                    <div className="col-12 col-md-2"><i class="bi bi-hospital fs-1 fuente"></i></div>
                        <div className="col-12 col-md-10"><h4 className="fuente">Sede</h4>
                        <p>{sedePaciente}</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 
        </>
    )

}