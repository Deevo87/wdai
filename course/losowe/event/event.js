const btn1 = document.querySelector('.btn1')

const test = (e) => {
    // console.log(e)
    console.log(e.target);
    console.log(e.target.classList);
    console.log(e.target.offsetTop);
}

btn1.addEventListener('click', test)