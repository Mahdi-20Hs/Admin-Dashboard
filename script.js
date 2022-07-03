const listItem = document.querySelectorAll('.sidebar li');


listItem.forEach((item) => {
  item.addEventListener('mouseover', () => {
    const listItemImg = document.querySelector(`.${item.getAttribute('class')} img`);
    listItemImg.setAttribute('style', 'filter: invert(0%) sepia(3%) saturate(341%) hue-rotate(339deg) brightness(98%) contrast(75%);')
  })
  item.addEventListener('mouseout', () => {
    const listItemImg = document.querySelector(`.${item.getAttribute('class')} img`);
    listItemImg.setAttribute('style', 'filter: invert(100%) sepia(99%) saturate(18%) hue-rotate(236deg) brightness(105%) contrast(100%);')
  })


})