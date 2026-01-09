// --- ЛОГІКА ПОРАД (Daily Tip) ---
const tips = [
    "Nie zapominaj o wodzie na spacerze, nawet jeśli nie jest gorąco. Aktywna zabawa wzmaga pragnienie!",
    "Latem sprawdzaj temperaturę asfaltu dłonią. Jeśli parzy Ciebie, parzy też łapy Twojego psa.",
    "Czekolada jest trująca dla psów i kotów. Trzymaj słodycze poza ich zasięgiem!",
    "Regularnie sprawdzaj sierść pupila pod kątem kleszczy, zwłaszcza po spacerach w lesie.",
    "Upewnij się, że Twój zwierzak ma adresatkę lub czip z aktualnymi danymi kontaktowymi.",
    "Koty również potrzebują zabawy! Poświęć im co najmniej 15 minut dziennie na polowanie na wędkę.",
    "Zimą sól na chodnikach może podrażniać łapy. Myj je po każdym spacerze letnią wodą."
];

const tipText = document.getElementById('tip-text');
const tipBtn = document.getElementById('tip-btn');

if(tipBtn) {
    tipBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        tipText.style.opacity = 0;
        setTimeout(() => {
            tipText.innerText = tips[randomIndex];
            tipText.style.opacity = 1;
        }, 300);
    });
    tipText.style.transition = "opacity 0.3s ease-in-out";
}

// --- ЛОГІКА МОДАЛЬНОГО ВІКНА (Popup) ---

// Отримуємо елементи
const modal = document.getElementById('auth-modal');
const openBtn = document.getElementById('open-login-btn');
const closeBtn = document.querySelector('.close-btn');
const forms = document.querySelectorAll('.auth-form');

// Відкрити вікно
openBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Щоб посилання не перезавантажувало сторінку
    modal.style.display = 'block';
});

// Закрити вікно (на хрестик)
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Закрити вікно (клік поза вікном)
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
});

// Перемикання вкладок (Login / Register)
window.openTab = function(tabName) {
    // Ховаємо всі форми
    const formContents = document.getElementsByClassName("auth-form");
    for (let i = 0; i < formContents.length; i++) {
        formContents[i].style.display = "none";
    }

    // Деактивуємо всі кнопки табів
    const tabLinks = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Показуємо потрібну форму і активуємо кнопку
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Симуляція відправки форми (без бази даних)
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Зупиняємо реальну відправку
        const inputs = form.querySelectorAll('input');
        const userEmail = inputs[0].value || "użytkowniku";
        
        alert(`Sukces! Witaj w społeczności PetFriendly.`);
        modal.style.display = 'none'; // Закриваємо вікно після "успіху"
        
        // Очистити поля
        form.reset();
        
        // Змінити кнопку в меню на "Мій профіль" (візуальний ефект)
        openBtn.textContent = "Mój profil 👤";
        openBtn.style.backgroundColor = "white";
        openBtn.style.color = "#93C572";
    });
});