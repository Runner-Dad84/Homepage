let navBtns = document.querySelectorAll('.navButn');

console.log(navBtns);

navBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        e.preventDefault();
    })

}
)

