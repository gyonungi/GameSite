let gyb = document.querySelector("#gyb");
let rmw = document.querySelector("#rmw");
let riddle = document.querySelector("#riddle");

gyb.addEventListener("click", function(){


 gyb=Number(prompt(`Введите номер месяц`));

if (gyb === 12 || gyb === 1 || gyb === 2  ) {
    alert(`Зима`) ;
} else if (gyb === 3 || gyb === 4 || gyb === 5){
    alert(`Весна`) ;
} 
else if (gyb === 6 || gyb === 7 || gyb === 8){
    alert(`Лето`) ;
} 
else if(gyb === 9 || gyb === 10 || gyb === 11) {
    alert(`Осень`) ;
}
else  {
alert(`Вы ввели неверный номер`);
}
});

rmw.addEventListener("click",function(){
let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 let randomArray = arr.sort(() => Math.random() - 0.5);
 alert(randomArray);
 let first = String(prompt(`Чему равнялся первый элемент?`));
i = 0;

    if (first == arr.shift() ) {
        alert(`Верно`);
        
    } else {
        alert(`Неверно`);
    }
    let two = String(prompt(`Чему равнялся последний элемент?`));
    if (two == arr.pop()) {
        alert('Верно');
        i = i + 1;
    }else{
        alert(`Неверно`);
    }
});

riddle.addEventListener("click", function(){
    const riddl = {
        question: `Летает без крыльев, плачет без глаз`,
        help : [`Это небесное тело`,`Похоже на облако`],
        answer : `туча`,
     askRiddle() {
        let attempt = 3;
        let i = 1 ;
        while ( i <= attempt){
        const questionUser = String(prompt(this.question));
        if (this.answer === questionUser) {
            alert(`Поздравляю,вы угадали`);
            break;
        }else if (i < attempt ){
                alert(`Неверно! Подсказка: ${this.help.splice(0,1)}, у вас осталось ${attempt - i} попыток`);
                riddl.askRiddle;
                
        }else {
               
        }
        i += 1;
     }
    }
    }
    riddl.askRiddle();
});
