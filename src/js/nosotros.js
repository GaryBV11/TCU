

function cards (card) {
    var cards = new Array('c1','c2','c3','c4');
    for (const element of cards) {
        var item = document.getElementById(element);
    if (element == card) {
        document.getElementById(`l${element.charAt(1)}`).classList.add('label-activa');
        item.classList.remove('ocultar-card');
        item.classList.add('mostrar-card');
    } else {
        document.getElementById(`l${element.charAt(1)}`).classList.remove('label-activa');
        item.classList.remove('mostrar-card');
        item.classList.add('ocultar-card');
    }
    }
}

// function resize() {
//     var cards = new Array('c1','c2','c3','c4');
//     if (window.matchMedia("(max-width: 500px)").matches) {
//         var timeline = document.getElementById("time-line");
//         timeline.setAttribute("style",'display: none; ');
//         var contenedor = document.getElementById("contenedor-cards-creemos");
//         contenedor.setAttribute("style",'height: auto; ');
//         for (const element of cards) {
//             var item = document.getElementById(element);
//             item.classList.remove('ocultar-card');
//             item.classList.remove('mostrar-card');
//             item.classList.add('card-fija'); 
//         }
//     } else {
//         var timeline = document.getElementById("time-line");
//         timeline.setAttribute("style",'display: flex; ');
//         var contenedor = document.getElementById("contenedor-cards-creemos");
//         contenedor.setAttribute("style",'height: 26rem; ');
//         for (const element of cards) {
//             var item = document.getElementById(element);
//             if (element == "c1") {
//                 document.getElementById(`l${element.charAt(1)}`).classList.add('label-activa');
//                 item.classList.add('mostrar-card');
//                 item.classList.remove('ocultar-card');
//             } else {
//                 document.getElementById(`l${element.charAt(1)}`).classList.remove('label-activa');
//                 item.classList.add('ocultar-card');
//                 item.classList.remove('mostrar-card');
//             }

//             item.classList.remove('card-fija'); 
//         }
//     }
// }

// var cards = new Array('c1','c2','c3','c4');
// if (window.matchMedia("(max-width: 500px)").matches) {
//     var timeline = document.getElementById("time-line");
//     timeline.setAttribute("style",'display: none; ');
//     var contenedor = document.getElementById("contenedor-cards-creemos");
//     contenedor.setAttribute("style",'height: auto; ');
//     for (const element of cards) {
//         var item = document.getElementById(element);
//         item.classList.remove('ocultar-card');
//         item.classList.remove('mostrar-card');
//         item.classList.add('card-fija'); 
//     }
// } else {
//     var timeline = document.getElementById("time-line");
//     timeline.setAttribute("style",'display: flex; ');
//     var contenedor = document.getElementById("contenedor-cards-creemos");
//     contenedor.setAttribute("style",'height: 26rem; ');
//     for (const element of cards) {
//         var item = document.getElementById(element);
//         if (element == "c1") {
//             document.getElementById(`l${element.charAt(1)}`).classList.add('label-activa');
//             item.classList.add('mostrar-card');
//             item.classList.remove('ocultar-card');
//         } else {
//             document.getElementById(`l${element.charAt(1)}`).classList.remove('label-activa');
//             item.classList.add('ocultar-card');
//             item.classList.remove('mostrar-card');
//         }

//         item.classList.remove('card-fija'); 
//     }
// }


