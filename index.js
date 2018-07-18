

function getFirstSelector(selector){
  
  const sel = selector;
  const fest = document.querySelector(sel);
    return fest;
  
}


function nestedTarget(){
  
  const festtoo = document.querySelector('#nested .target');
    return festtoo
  
}



function increaseRankBy(n){
  
  
  const festree = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  
  
  for(let i = 0; i < festree.length; i++){
    festree[i].innerHTML = parseInt(festree[i].innerHTML) + n;
 }
 
 return festree;
  
}



function deepestChild(){
  
  const festfor = document.querySelector('#app #grand-node div div div div');
  
  
  return festfor;
  
}



