//change text color of section title with js 
const sectionText = document.getElementById('section-title');
sectionText.style.color = 'hotpink';
console.log(sectionText);

//set player bgcolor with js
const playerBgColor = document.querySelectorAll('.player');
for(const color of playerBgColor){
    color.style.backgroundColor = 'green';
    console.log(color);
}
// playerBgColor.style.backgroundColor = 'red';
// console.log(playerBgColor);

// append a ul list 
/* const mainPart = document.getElementById('main-part');
const ulsection = document.createElement('section');
ulsection.setAttribute('id','new-section');
const buttonClicked = document.createElement('button');
buttonClicked.setAttribute('id','btn-clicked');
const ulList = document.createElement('ul');
const listItem = document.createElement('li');
listItem.innerText = 'hello';
ulList.append(listItem);
ulsection.appendChild(ulList);
mainPart.append(ulsection);
console.log(mainPart) */
document.getElementById('clicked').addEventListener('click',function(){
    const ulList = document.getElementById('ul-list');
    const listItem = document.createElement('li');
    let number = 0;
    dynamicNumber = number+1;
    listItem.innerText = 'list-'+dynamicNumber;

    ulList.appendChild(listItem);
})

//input btn clicked
document.getElementById('input-btn').addEventListener('click',function(){
    let inputField = document.getElementById('input-field').value;
    let inputFieldText = parseInt(inputField);
    if(inputField < 5){
        inputFieldText = inputFieldText + 1;
        
    }
    inputField.value = inputFieldText;
    /* for(let i=1; i<5; i++){
        inputFieldText = inputFieldText + i;
        inputField.value = inputFieldText;
        console.log(inputField);
    } */
    
})
