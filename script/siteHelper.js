document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I') ||
        (e.ctrlKey && e.shiftKey && e.key === 'J') || (e.ctrlKey && e.key === 'Shift' && e.key === 'C')) {
        e.preventDefault();
    }
});
const ibaseUrl = "https://rail-xpert.vercel.app/api/"
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});