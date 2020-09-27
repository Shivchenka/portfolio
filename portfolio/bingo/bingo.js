let texts = [
  'Стал доктором диванной вирусологии',
  'Ставил разные фоны в зуме',
  'Работал из дома',
  'Купил домой спортивный инвентарь',
  'Посмотрел все сериалы мира',
  'Заказывал еду и продукты',
  'Читал конспироло- гические теории о ковиде',
  'Сильно изменил свой круг общения',
  'Пересматривал свои старые отпускные фото',
  'Изолировался дома',
  'Наряжался на онлайн концерты и спектакли',
  'Мечтал завести собаку, чтобы можно было гулять',
  'Мониторил статистику заболеваемости',
  'Ходил в зум-бар, на зум-вечеринку',
  'Точно решил копить финансовую подушку в будущем',
  'Работал в трусах',
  'Писал оптимистичные посты в инстаграме',
  'Истратил денежные запасы',
  'Находил у себя симптомы ковида',
  'Потолстел',
  'Давал обещания на будущее',
  'Проводил 24/7 со своей семьёй',
  'Был продуктивным и учился чему-то новому',
  'Потерял деньги в виде авиабилетов',
  'Искал дополнительный заработок'
];

let cardsData = [];

let createData = function () {
  for (let i = 0; i <= 24; i++) {
    cardsData.push({
      text: texts[i],
    });
  }
  return cardsData;
};

createData();

let cardsPool = document.querySelector('ul');

let bingoCounter = document.querySelector('.bingo-counter');
bingoCounter.textContent = 0;


let mainBG = document.querySelector('main');
let bingo = function(count) {
  if(count == 1) {
    mainBG.classList.add('bingo1');
    document.querySelector('.note1').classList.add('note1-active');
  };
  if(count == 2) {
    mainBG.classList.add('bingo2');
    document.querySelector('.note2').classList.add('note2-active');
  };
  if(count == 3) {
    mainBG.classList.add('bingo3');
    document.querySelector('.note3').classList.add('note3-active');
  };
  if(count == 4) {
    mainBG.classList.add('bingo4');
    document.querySelector('.note4').classList.add('note4-active');
  };
  if(count == 5) {
    mainBG.classList.add('bingo5');
    document.querySelector('.note5').classList.add('note5-active');
  };
  if(count == 6) {
    mainBG.classList.add('bingo6');
    document.querySelector('.note6').classList.add('note6-active');
  };
  if(count == 7) {
    mainBG.classList.add('bingo7');
    document.querySelector('.note7').classList.add('note7-active');
  };
  if(count == 8) {
    mainBG.classList.add('bingo8');
    document.querySelector('.note8').classList.add('note8-active');
  };
  if(count == 9) {
    mainBG.classList.add('bingo9');
    document.querySelector('.note9').classList.add('note9-active');
  };
  if(count == 10) {
    mainBG.classList.add('bingo10');
    document.querySelector('.note10').classList.add('note10-active');
  };
  if(count == 12) {
    mainBG.classList.add('bingo12');
    document.querySelector('.note12').classList.add('note12-active');
  };  
}

let getBingoCount = function (data) {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    if(checkRow(data, i)) {
      count++;
    }
    if(checkCol(data, i)) {
      count++;
    }
  };

  if(checkDiag(data, 0, 6)) {
    count++;
  }
  if(checkDiag(data, 4, 4)) {
    count++;
  }
  return count;  
};

let checkRow = function (data, rowNumber) {
  return checkDiag(data, rowNumber*5, 1);
};

let checkCol = function (data, colNumber) {
  return checkDiag(data, colNumber, 5);
};

let checkDiag = function (data, c, m) {
  for (let i = 0; i < 5; i++) {
    if(!data[c+i*m].pushed) {
      return false;
    }
  };
  return true;
};

let createElements = function (data) {
  for (let i = 0; i < data.length; i++) {

    let card = document.createElement('li');
    card.classList.add('item');
    card.textContent = data[i].text;
    cardsPool.appendChild(card);

    card.addEventListener('click', function (evt) {
      if (!card.classList.contains('pushed')) {
        card.classList.add('pushed');
        data[i].pushed = true; 
        
        let count = getBingoCount(data);
        bingoCounter.textContent = count;

        if (count) {
          bingo(count);
        }        
      }
    });    
  }
};

createElements(cardsData);