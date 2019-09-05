const parts = [];

$(document).ready(() => {
  for(let i = 1; i < 5; i++) {
    parts.push({elm: document.getElementById(`part${i}`)});
  }

  for(let i = 0; i < parts.length; i++) {
    $(parts[i].elm).addClass('end');
  }
});

window.addEventListener('wheel', (e) => {

  for (let i = 0; i < parts.length; i++) {
    doChanges(parts[i].elm);
  }

});

function checkVisible(elm, threshold) {
  threshold = threshold || 0;

  const tpt = elm.getBoundingClientRect();

  // console.log(tpt.width + tpt.x);

  const before = tpt.left - threshold < 0 && tpt.width + tpt.x > 0;

  return before;
}

function doChanges(elm) {
  if (checkVisible(elm, 0)) {
    if($(elm).hasClass('end')) {
      $(elm).removeClass('end');
    }
    if(!$(elm).hasClass('start')) {
      $(elm).addClass('start');
    }
  } else {
    if($(elm).hasClass('start')) {
      $(elm).removeClass('start');
    }

    if(!$(elm).hasClass('end')) {
      $(elm).addClass('end');
    }
  }
}