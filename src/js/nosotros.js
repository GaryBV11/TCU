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
