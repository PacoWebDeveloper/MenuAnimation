window.addEventListener('load', () => {
    var iconContainer = document.querySelectorAll('.icon-container');
    
    iconContainer.forEach(item => {
        item.addEventListener('click', () => {
            iconContainer.forEach(item => {
                if (item.classList.contains('active'))
                    item.classList.remove('active');
            })
            item.classList.toggle('active');
        })
    })
})