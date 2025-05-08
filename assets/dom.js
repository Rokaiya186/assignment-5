function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}
document.getElementById('btn-complete-1').addEventListener('click',function(){
    
    // console.log('button clicked')

})
document.getElementById('btn-complete-2').addEventListener('click',function(){
    
    // console.log('button clicked')
})
document.getElementById('btn-complete-3').addEventListener('click',function(){
    
    // console.log('button clicked')
})
document.getElementById('activity-btn').addEventListener('click',function(){
    // console.log('activity btn clicked');
})
const d = new Date();
document.getElementById('current-date').innerHTML = d.getMonth() + 1

document.getElementById('btn-complete-1').addEventListener('click',function(){
    const ul = document.getElementById('activity-btn');
    const p = document.createElement('p');
    p.innerText = 'You click Fix Mobile Button Issue button'
    ul.appendChild(p);
})

document.getElementById('btn-complete-2').addEventListener('click',function(){
    const ul = document.getElementById('activity-btn');
    const p = document.createElement('p');
    p.innerText = 'You click Add Dark Mode button'
    ul.appendChild(p);
})

document.getElementById('btn-complete-3').addEventListener('click',function(){
    const ul = document.getElementById('activity-btn');
    const p = document.createElement('p');
    p.innerText = 'You click Optimize Home Page button'
    ul.appendChild(p);
})

let number = 5;

const button = document.getElementById('btn-complete-1');
const display = document.getElementById('task-assigned');

button.addEventListener("click", () => {
    number--;
    display.textContent = number;
})



  



