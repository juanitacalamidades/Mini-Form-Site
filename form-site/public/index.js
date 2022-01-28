let select = document.getElementById("select");
let subConsultaInfo = "";
let subConsultaIncidencia = "";
let otra = "";

const cambiar = () => {


    if (select.value == 2) {
        console.log(select.value);
        subConsultaIncidencia += `
        <select name="incidencia" id="incidencia">
            <option value="instalacion">Instalación</option>
            <option value="transporte">Transporte</option>
        </select>
            `
        document.getElementById("subconsulta").innerHTML = subConsultaIncidencia;

    };

    if (select.value == 1) {
        console.log(select.value)
        subConsultaInfo += ` 
        <select name="informacion" id="informacion">
            <option value="productos">Productos</option>
            <option value="devoluciones">Devoluciones</option>
            <option value="promociones">Promociones</option>
            <option value="envios">Envíos</option>
         </select>
            `
        document.getElementById("subconsulta").innerHTML = subConsultaInfo;

    };
    if (select.value == 3) {
        otra += `
            <p>Por favor, describe el motivo de tu consulta</p>
        `
        document.getElementById("subconsulta").innerHTML = otra;
    }
}
select.addEventListener("change", cambiar);