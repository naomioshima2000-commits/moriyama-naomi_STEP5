
const input=document.getElementById('input');
const output=document.getElementById('output');
const colorbutton=document.getElementById('colorbutton'); 
const textElement = document.getElementById('text');
const addbutton=document.getElementById('addbutton');
const logbutton=document.getElementById('logbutton');

let log1=0;
let log2=0;
let log3=0;

let count=0;
let Count=0;
let addButton=0;

var OutputText="";
let inputtext="";
var InputText=[""];




addbutton.addEventListener('click',function(){
    addButton = 1;
    inputtext = input.value;
    InputText.push(inputtext);
    if(count >= 3 && addButton == 1){
        output.removeChild(output.firstChild);
        count--;
        display();
    }
});
addButton = 0;

    const displaybutton=document.getElementById('displaybutton');
    displaybutton.addEventListener('click',function(){
        log1 = 1;
    display();
    
});

let currentIndex = 0;
colorbutton.addEventListener('click',function(){
    log2 = 1;
  const colors=["#ADD8E6","#90EE90","#F08080"];
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex=(currentIndex + 1) % colors.length;
});


function display(){
    count++;
    Count++;
addButton = 0;
    
    OutputText = InputText[Count];
    output.classList.toggle('hightlight');
    const row= document.createElement('div');
    if(inputtext === ""){
        alert("入力値が空です。");
    }else if(InputText[Count] == null){
        alert("追加されてません");
        InputText.splice(Count,1);
        Count--;
        count--;
    }else{
        const text = document.createTextNode(OutputText);
        row.appendChild(text);
        const deleteButton=document.createElement('button');
        deleteButton.textContent="削除";
        deleteButton.style.marginLeft = "20px";
        row.appendChild(deleteButton);
        if(count >= 3){
            displaybutton.style.display='none';
            output.prepend(row);
                if(count >= 3){
                   displaybutton.style.display='none';
                };  
        }; 

        deleteButton.addEventListener('click',function(){
            log3 = 1;
            row.remove();
            InputText.splice(Count,1);
            Count--;
            count--;
            if(count < 3){
                displaybutton.style.display='inline-block'; 
            }
        });        
    };
    output.appendChild(row);    
}

let logcount = 0;


logbutton.addEventListener('click',function(){
    if(log1 === 1 && log2 === 1 && log3 === 1 ){
        logcount++;
    }
    alert("ログ数:" + logcount);
});   





