lucide.createIcons();

function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('sidebarOverlay').classList.toggle('active');
}

function toggleSearch() {
    const s = document.getElementById('searchWrapper');
    s.style.display = (s.style.display === 'block') ? 'none' : 'block';
}

function toggleTheme() {
    document.body.classList.toggle('light-mode');
}

function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    document.getElementById('nav-' + tabId).classList.add('active');
    
    if(document.getElementById('sidebar').classList.contains('active')) toggleSidebar();
   
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function searchProject() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const items = document.querySelectorAll('.card, .game-card');
    items.forEach(item => {
        const text = item.innerText.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}