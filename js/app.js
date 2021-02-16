console.log(autos);
// const autos = autos;
const resultado = document.querySelector('#resultado');
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const color = document.querySelector('#color');
const transmision = document.querySelector('#transmision');
const puertas = document.querySelector('#puertas');

const max = new Date().getFullYear();
const min = max - 11;

const datosBusqueda = {
        marca: '', 
        modelo: '', 
        year: '', 
        precio: '', 
        puertas: '', 
        color: '', 
        transmision: '' 
}


function Eventos(){
    marca.addEventListener('input', e => {
        datosBusqueda.marca = e.target.value;
    
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    year.addEventListener('input', e => {
        datosBusqueda.year = Number(e.target.value);
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    minimo.addEventListener('input', e => {
        datosBusqueda.minimo = Number(e.target.value);
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    
    maximo.addEventListener('input', e => {
        datosBusqueda.maximo = Number(e.target.value);
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    
    puertas.addEventListener('input', e => {
        datosBusqueda.puertas = Number(e.target.value);
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    transmision.addEventListener('input', e => {
        datosBusqueda.transmision = e.target.value
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    color.addEventListener('input', e => {
        datosBusqueda.color = e.target.value
        // Mandar llamar la función de filtrar Autos
        filtrarAuto();
    });
    
    
}

function filtrarAuto(){

    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    MostrarResultado(resultado)
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca){
        return auto.marca === datosBusqueda.marca;
    } 
    return auto;
}
function filtrarYear(auto) {
    if(datosBusqueda.year){
        return auto.year === datosBusqueda.year;
    }
    return auto;
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo){
        return auto.precio >= datosBusqueda.minimo;
    }
    return auto;
}
function filtrarMaximo(auto) {
    if(datosBusqueda.maximo){
        return auto.precio <= datosBusqueda.maximo;
    }
    return auto;
}
function filtrarPuertas(auto) {
    if(datosBusqueda.puertas){
        return auto.puertas === datosBusqueda.puertas;
    }
    return auto;
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision){
        return auto.transmision === datosBusqueda.transmision;
    } 
    return auto;
}

function filtrarColor(auto){
    if(datosBusqueda.color){
        return auto.color === datosBusqueda.color;
    } 
    return  auto;
}

function noResultado(){
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error','mb-5');
    noResultado.appendChild(document.createTextNode('No hay Resultados'));
    document.querySelector('#resultado').appendChild(noResultado);
}

function MostrarResultado(filtro){
    LimpiarHTML();
    if(filtro.length === 0){
        noResultado();
    }else{
    filtro.forEach(auto=>{
        const {marca,modelo,year,puertas,color,transmision,precio} = auto;
        const r = document.createElement('p');
        r.innerHTML = `
            ${marca} - ${modelo} - ${year} - ${puertas} - ${color} - ${transmision} - ${precio}
        `;
        resultado.appendChild(r);
    });
    }
}

function LimpiarHTML(){
    while (resultado.firstChild) {
        resultado.firstChild.remove();
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    autos.forEach(auto=>{
        const {marca,modelo,year,puertas,color,transmision} = auto;
        const r = document.createElement('p');
        r.innerHTML = `
            ${marca} - ${modelo} - ${year} - ${puertas} - ${color} - ${transmision}
        `;
        resultado.appendChild(r);
    });

    for (let i = max; i >=  min; i--){
        const selector_year = document.createElement('option');
        selector_year.textContent = i;
        year.appendChild(selector_year);
    };
    Eventos();
    console.log(filtro);
});
