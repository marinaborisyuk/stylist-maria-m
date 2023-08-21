const copyButtons = document.querySelectorAll('.copy-email-btn');
const notificationContainer = document.getElementById('notificationContainer');

copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.setAttribute('disabled', 'disabled');
        const email = 'stylist.marie.m@gmail.com';

        const tempInput = document.createElement('input');
        tempInput.setAttribute('value', email);
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);

        const notification = document.createElement('div');
        notification.className = 'notification alert alert-info';
        notification.innerHTML = 'Email copied!';
        notificationContainer.appendChild(notification);

        setTimeout(function() {
            notification.classList.add('show');
        }, 10);

        setTimeout(function() {
            notification.classList.add('hide');

            setTimeout(function() {
                notificationContainer.removeChild(notification);
            }, 300);
            btn.removeAttribute('disabled');
        }, 800);
    });
});