document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    const toggleBtn = document.getElementById('toggleWorksBtn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleWorks);
    }
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value;
            const email = form.email.value;
            const message = form.message.value;
            const subject = form.subject.value;
            const body = `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
            const mailto = `mailto:antolini.dg@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.location.href = mailto;
        });
    }
})
const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
    mobileMenu.style.transform = 'translateX(-16rem)';
}

function toggleWorks() {
    const more = document.getElementById('moreWorks');
    const btn = document.getElementById('toggleWorksBtn');
    if (!more || !btn) return;
    const isShown = !more.classList.contains('hidden');
    if (isShown) {
        more.classList.add('hidden');
        btn.innerHTML = 'Mostrar más<img src="./assets/right-arrow-bold.png" alt="" class="w-4 dark:hidden"><img src="./assets/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">';
    } else {
        more.classList.remove('hidden');
        btn.innerHTML = 'Mostrar menos<img src="./assets/right-arrow-bold.png" alt="" class="w-4 dark:hidden"><img src="./assets/right-arrow-bold-dark.png" alt="" class="w-4 hidden dark:block">';
    }
}

function closeMenu() {
    mobileMenu.style.transform = 'translateX(0)';
}

function toggleTheme() {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
    } else {
        localStorage.theme = 'light';
    }
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navbar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.remove('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    } else {
        navbar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg', 'shadow-sm', 'dark:bg-darkTheme', 'dark:shadow-white/20');
        navLink.classList.add('bg-white', 'shadow-sm', 'bg-opacity-50', 'dark:border', 'dark:border-white/30', "dark:bg-transparent");
    }
})