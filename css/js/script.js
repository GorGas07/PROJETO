function showTab(tabId) {

    const tabs = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    document.getElementById(tabId).style.display = 'block';
}

function toggleInfo() {

    const info = document.getElementById('extraInfo');

    if (info.style.display === 'none') {
        info.style.display = 'block';
    } else {
        info.style.display = 'none';
    }
}