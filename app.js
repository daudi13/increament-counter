const counters = document.querySelectorAll('.figure')

counters.forEach(counter => {
    counter.innerText = '0';

    updateCounter()
})

function updateCounter() {
    counters.forEach(digits => {
        const target = digits.getAttribute('data-target')
        const c = +digits.innerText

        const increment = target / 200
        
        if (c < target) {
            digits.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = target
        }
    })
}
