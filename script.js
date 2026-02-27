function toggleMenu() {
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".sidebar-overlay");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
}

document.querySelectorAll('.sidebar-links a, .nav-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId.startsWith("#")) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            const navHeight = 85;
            if (targetElement) {
                document.querySelector(".sidebar").classList.remove("active");
                document.querySelector(".sidebar-overlay").classList.remove("active");
                const targetPosition = targetElement.offsetTop - navHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show"); 
        }
    });
}, { threshold: 0.25 });

document.querySelectorAll(".glass").forEach(el => {
    el.classList.add("fade-up");
    observer.observe(el);
});

window.onscroll = function() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    document.querySelector(".scroll-pregress").style.width = scrolled + "%";
};

let isGlassEnabled = true;
function toggleGlassEffect() {
    const body = document.body;
    const statusText = document.getElementById("glassStatusText");
    const indicator = document.getElementById("glassIndicator");
    isGlassEnabled = !isGlassEnabled;
    if (!isGlassEnabled) {
        body.classList.add("glass-off");
        statusText.innerText = "GLASS: OFF";
        indicator.style.backgroundColor = "#ff4444";
        indicator.style.boxShadow = "0 0 10px #ff4444";
    } else {
        body.classList.remove("glass-off");
        statusText.innerText = "GLASS: ON";
        indicator.style.backgroundColor = "#00ff88";
        indicator.style.boxShadow = "0 0 10px #00ff88";
    }
    
}
window.addEventListener('load', function() {
    const modal = document.getElementById('welcomeModal');
    setTimeout(() => {
        modal.classList.add('active');
    }, 100);
});

function closeModal() {
    const modal = document.getElementById('welcomeModal');
    modal.classList.remove('active');
}