

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
  
<<<<<<< HEAD
  
  for(let i = 0; i < festree.length; i++){
    festree[i].innerHTML = parseInt(festree[i].innerHTML) + n;
 }
 
 return festree
=======
  //const listItems = list.children;
  
 // for(let child in festree ){
//    let listItems = festree[child].children;
 //   for(let sub in listItems){
 //     listItems[sub].innerHTML = parseInt((listItems[sub]) + n);
//    }
//  }
  
 // for(let i = 0; i < festree.length; i++){
 //   festree[i].innerHTML = parseInt(i + n);
//  }
>>>>>>> e479645e85206376e4dd83844c788674e550b220
  
}



function deepestChild(){
  
  const festfor = document.querySelector('#app #grand-node div div div div');
  
  
  return festfor;
  
}



