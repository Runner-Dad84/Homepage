let navBtns = document.querySelectorAll('.navButn');
let textBox = document.getElementsByClassName('projDesc');
let textProj = document.querySelectorAll('.textProj');



navBtns.forEach(btn => {
    btn.addEventListener('click', (e)=> {
       // e.preventDefault();
        textProj.forEach(text => text.style.display = 'none');
        let targetID = (btn.id).replace('nav', 'text');
        let target = document.getElementById(targetID);
        target.style.display = 'flex';
    })
    
}
)

