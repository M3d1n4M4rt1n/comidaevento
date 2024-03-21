const subtitle = document.getElementById("subTitleJS");
const subtitle2 = document.getElementById("subTitleJS2");

setTimeout(function(){
    subtitle.textContent = "Platos Emblemáticos";
    setTimeout(function(){
        subtitle2.textContent = "Y sus Calificaciones";
    }, 1000);
}, 1000);

const platos = [
    {
        "nombre": "Ceviche",
        "descripcion": "Pescado crudo marinado en jugo de limón.",
        "esRico": true    },
        {
            "nombre": "Anticuchos",
            "descripcion": "Brochetas de corazón de res marinadas en ají panca.",
            "esRico": true
        },
        {
            "nombre": "Rocoto Relleno",
            "descripcion": "Rocoto relleno de carne picada, vegetales y queso, horneado.",
            "esRico": true
        },
        {
            "nombre": "Juane",
            "descripcion": "Arroz con carne de pollo envuelto en hojas de bijao, típico de la selva.",
            "esRico": true
        },
        {
            "nombre": "Picarones",
            "descripcion": "Rosquillas fritas hechas de calabaza y servidas con miel de chancaca.",
            "esRico": true
        },
        {
            "nombre": "Mondonguito a la Italiana",
            "descripcion": "Trozos de mondongo en salsa de tomate con vegetales.",
            "esRico": false
        }
    ];
    
    const platoElement = document.getElementById("dishes");
    let contenido = "";
    platos.forEach(function(plato) {
        let claseIcon = plato.esRico ? "rico" : "no-rico";
        const template = `
            <div class="plato">
                <div class="icon icon-${claseIcon}"></div>
                <div class="data">
                    <h4>${plato.nombre}</h4>
                    <p>${plato.descripcion}</p>
                </div>
                <div class="calificacion">
                    ${plato.esRico ? "Delicioso" : "No recomendado"}
                </div>
            </div>
        `;
        contenido += template;
    });
    
    platoElement.innerHTML = contenido;
    
