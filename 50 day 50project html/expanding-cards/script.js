const panels = document.querySelectorAll('.img')

panels.forEach(img => {
    img.addEventListener('click', () => {
        removeActiveClasses()
        img.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(img => {
        img.classList.remove('active')
    })
}