
/* //3
const en = ["mon",  "tue",  "wed",  "thu",  "fri",  "sat",  "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
let keys = {};
for (let i = 0; i < en.length; i++) {
    let key = en[i];
    let val = ru[i];
    keys[key] = val;
}
console.log(keys);
//4
const week = {
    Понедельник: 1,
    Вторник :  2,
     Среда :  3,
    Четверг : 4,
    Пятница : 5,
   Суббота : 6,
   Воскресенье: 7,
    askQuestion() {
        let result = Number(prompt(`Введите день недели`))
        if (1 === result) {
            alert(`Понедельник`);
        } else if (2 === result) {
            alert(`Вторник`);
        }
            else if (3 === result) {
                alert(`Среда`);
            }
                else if (4 === result) {
                    alert(`Четверг`);
                }
                    else if (5 === result) {
                        alert(`Пятница`);
                    }
                        else if (6 === result) {
                            alert(`Суббота`);
                        }
                        else if (7 === result) {
                            alert(`Воскресенье`);         
        }else {
        alert('Вы точно ввели тот день?!')
        }
    }
}
week.askQuestion();
//5 
const numbers = {
	key1: {
		keyin1: 1,
		keyin2: 2,
		keyin3: 3,
	},
	key2: {
		keyin1: 4,
		keyin2: 5,
		keyin3: 6,
	},
}
for ( let key in numbers) {
    let sumkey1 = Object.values(numbers.key1).reduce((previousValue, currentValue) => previousValue + currentValue );
    let sumkey2 = Object.values(numbers.key2).reduce((previousValue,currentValue) => previousValue + currentValue);
   let result = sumkey1 + sumkey2;
   console.log(result);
    } 
    //1
    const numbers = {
        keyin1: 1,
        keyin2: 2,
        keyin3: 3,
        keyin4: 4,
        keyin5: 5,
        keyin6: 6,
        keyin7: 7,
    }
  for (const key in numbers) {
    let result = Object.values(numbers).filter(x => x >= 3);
    console.log(result);
  }
//2
let today =    
{
    День : 23,
    Месяц: 06,
    Год: 2022,
   
}
let i = new Date();
today.День = i.getDate();
today.Месяц = i.getMonth() + 1;
today.Год = i.getFullYear();
console.log(today); */

//6
const months = {
  ru: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ],
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ]
};

let language = prompt("Введите ru или en");

if (language === "ru") {
  const ruMonth = months.ru;
  getMonth(ruMonth);
} else if (language === "en") {
  const enMonth = months.en;
  getMonth(enMonth);
} else {
  alert("Неверно задан язык");
}

function getMonth(arr) {
  let month = Number(prompt("Введите номер месяца, который вы хотите вывести"));
  for (let i = 1; i <= arr.length; i++) {
    if (month === i) {
      console.log(arr[i - 1]);
      break;
    } else if (month < 1 || month > 12 || Number.isNaN(month)) {
      console.log("Неверно выбран месяц");
      break;
    } else {
      continue;
    }
  }
}

