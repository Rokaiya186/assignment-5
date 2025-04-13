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

document.getElementById('discover').addEventListener('click',function(){
    const newTab = window.open('index2.html');


newTab.document.querySelector('#discover-btn').click();
})

// let btnClick = document.querySelector('discover');
// btnClick.addEventListener('click',function(){
//     window.location.href = "index2.html";
// })



