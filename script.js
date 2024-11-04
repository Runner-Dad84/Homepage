let navBtns = document.querySelectorAll('.navButn');
let textBox = document.getElementsByClassName('projDesc');
let textProj = document.querySelectorAll('.textProj');



navBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
        e.preventDefault();
        textProj.forEach(text => text.style.display = 'none');
        console.log(btn.id);
    })
    
}
)

