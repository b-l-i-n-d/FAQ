let li = document.querySelectorAll('.faq-text li')

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (e) => {
        let clickedLi;
        let s = e.target.classList.contains('show-answer');
        console.log(s);
        if(e.target.classList.contains('question-arrow')) {
            clickedLi = e.target.parentElement;
        } else {
            clickedLi = e.target.parentElement.parentElement;
        }
        clickedLi.classList.toggle('show-answer')
    })
}