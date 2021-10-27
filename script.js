let li = document.querySelectorAll('.faq-text li .question-arrow');

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (e) => {
        
        let open = document.querySelector('li .show-answer');
        if (open !== null) {
            open.classList.toggle('show-answer');
        };

        let clickedLi;

        if(e.target.classList.contains('question-arrow')) {
            clickedLi = e.target.parentElement;
            console.log("🚀 ~ file: script.js ~ line 15 ~ li[i].addEventListener ~ clickedLi", clickedLi)
        } else {
            clickedLi = e.target.parentElement.parentElement;
            console.log("🚀 ~ file: script.js ~ line 18 ~ li[i].addEventListener ~ clickedLi", clickedLi)
        }
        clickedLi.classList.toggle('show-answer');
    })
}