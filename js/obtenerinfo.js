const url = 'https://6743153db7464b1c2a638caf.mockapi.io/api/filosofo';
let id =0;

async function obtenerInfo() {
    const tablebody = document.querySelector("#table");
    try {
        let res = await fetch(url);
        let json = await res.json();
        console.log(json);
        for (const filosofo of json) {
            tablebody.innerHTML +=`
            <tr>
                <td>${filosofo.name} </td>
                <td>${filosofo.pais} </td>
                <td>${filosofo.id}</td>
            </tr>`
        }
    } catch (error) {
        console.log(Error);
    } 
}

async function agregarInfo() {
    
    let nombreNuevo= document.querySelector("#nombrenuevo").value;
    let paisNuevo=document.querySelector("#paisnuevo").value;
    
    let filosofo = {
        "name" : nombreNuevo,
        "pais" : paisNuevo,
        "id": id
    }
    try { 
        let res = await fetch(url, {
            "method": "POST",
            "headers": { "Content-type": "application/json" },
            "body": JSON.stringify(filosofo)
        });
        let json = await res.json();
        
    } 
    catch (error) {
        console.log(Error);
    }   
}

async function eliminarFila() {
    ideliminar=document.querySelector("#idborrar").value;
    console.log(ideliminar);
    try {
        let res = await fetch(`${url}/${ideliminar}`, {
            "method": "DELETE",
        })
    } 
    catch (error) {
        console.log(Error);
    } 
}

async function editarFila() {
    let nombreEditado= document.querySelector("#nombreeditado").value;
    let paisEditado=document.querySelector("#paiseditado").value;
    let ideditar=document.querySelector("#ideditar").value;

    let filosofo={
        "name" : nombreEditado,
        "pais" : paisEditado,
        "id": ideditar
    }

    try {
        let res = await fetch(`${url}/${ideditar}`, {
            "method": "PUT",
            "headers": {"Content-type":"application/json"},
            "body":JSON.stringify(filosofo)
        })   
    } 
    catch (error) {
        console.log(Error);
    }   

    
}


obtenerInfo();
document.querySelector("#agregar").addEventListener("click",agregarInfo);
document.querySelector("#eliminar").addEventListener("click",eliminarFila);
document.querySelector("#editar").addEventListener("click",editarFila);