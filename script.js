let descRandom = document.querySelector('.desc-random')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')
let guess = 3
descRandom = Math.floor(Math.random() * 10)



btn.addEventListener('click',()=>{
    if (input.value === descRandom ) {
        alert("Вы победили!")
    } else if( guess > 1) {
       alert( descRandom.textContent=`Попробуйте еще раз, у вас осталось ${guess = guess -1 }  попытки`)
    } else {
        alert('Игра окончена, Вы проиграли!')
    }
}
)


