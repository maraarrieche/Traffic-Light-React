import React, { useState } from "react";
import "../../styles/TrafficLight.css"

const TrafficLight = () => {

    const [colorActivado, setColorActivado] = useState('');


    return(
        <>
        <h1 id="titulo">Traffic Light!</h1>
        <h3 id="texto">You can click on each color or click on the button below and see what happens!</h3>
        <div className="d-flex justify-content-center mt-4">
         <div className="card text-bg-dark" style={{width: "2rem", height:"10rem"}}>
                <div className="card-body">
            </div>
        </div>   
        </div>

        <div className="d-flex justify-content-center">
        <div className="card text-bg-dark" style={{width: "13rem", height:"27rem"}}>
                <div className="card-body bg-dark m-auto mt-1">
                     <div onClick={() => setColorActivado('danger')}  className={`${colorActivado == 'danger' ? 'semaforo-rojo' : "rounded-circle bg-danger"}`} style={{width: "8rem", height:"8rem"}}></div>
                     <div onClick={() => setColorActivado('warning')} className={`${colorActivado == 'warning' ? 'semaforo-amarillo' : "rounded-circle bg-warning"}`} style={{width: "8rem", height:"8rem"}}></div>
                     <div onClick={() => setColorActivado('success')} className={`${colorActivado == 'success' ? 'semaforo-verde' : "rounded-circle bg-success"}`} style={{width: "8rem", height:"8rem"}}></div>
            </div>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle mt-5 mb-5" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    Choose color!
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a onClick={() => setColorActivado('danger')} className={`${colorActivado == 'danger' ? 'semaforo-rojo' : "dropdown-item"}`}>Red</a></li>
                    <li><a onClick={() => setColorActivado('warning')} className={`${colorActivado == 'warning' ? 'semaforo-amarillo' : "dropdown-item"}`}>Yellow</a></li>
                    <li><a onClick={() => setColorActivado('success')} className={`${colorActivado == 'success' ? 'semaforo-verde' : "dropdown-item"}`}>Green</a></li>
                </ul>
            </div>
            </div>   
        </div>
        </>
    )
}

export default TrafficLight;