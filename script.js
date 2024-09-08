document.addEventListener('DOMContentLoaded', function() {
    const downloadAllBtn = document.createElement('button');
    downloadAllBtn.textContent = 'تنزيل جميع الصور';
    downloadAllBtn.style.margin = '2rem';
    document.body.insertBefore(downloadAllBtn, document.querySelector('footer'));

    downloadAllBtn.addEventListener('click', function() {
        const links = document.querySelectorAll('.image-container a');
        links.forEach(link => {
            const url = link.getAttribute('href');
            const a = document.createElement('a');
            a.href = url;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        });
    });
});
