const counter = document.querySelector('#notifications-counter');
const unreadNotifications = document.querySelectorAll('.notification.active');
const markAllRead = document.querySelector('#mark-all-read');

counter.innerText = unreadNotifications.length;

markAllRead.addEventListener('click', (e) =>
{
    counter.innerText = 0;
    const activeNotifications = document.querySelectorAll('.notification.active');
    activeNotifications.forEach(notification =>
    {
        notification.classList.remove('active');
    })
})