var slideIndex = 0;

function showSlides() {
    var slides = document.getElementsByClassName("mySlides-fade");
    var dots = document.getElementsByClassName("dot");

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    for (var j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000);
}

// Saglabā un ielādē krāsu no localStorage
const colorPicker = document.getElementById('color-picker');

// Funkcija, lai ielādētu pēdējo izvēlēto krāsu
function loadColor() {
    const savedColor = localStorage.getItem('Edmunds_color');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorPicker.value = savedColor; // Krāsas izvēles ielāde
    }
}

// Funkcija, lai saglabātu krāsu localStorage
function saveColor(color) {
    localStorage.setItem('Edmunds_color', color); // Saglabā krāsu ar personalizētu nosaukumu
}

// Uzstādam notikumu, lai saglabātu izvēlēto krāsu
colorPicker.addEventListener('input', (e) => {
    const selectedColor = e.target.value;
    document.body.style.backgroundColor = selectedColor;
    saveColor(selectedColor);
});

// Ielādē krāsu, kad lapa tiek atvērta
window.addEventListener('load', loadColor);

document.addEventListener("DOMContentLoaded", function() {
    showSlides();
});
