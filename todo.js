//creating a text node
// let h=document.createElement('h1')
// let myvalue=document.createTextNode('hello world..!')
// h.appendChild(myvalue)
// document.querySelector('h1').appendChild(h)

let ul=document.getElementById('list')
// console.log(ul)
var li;
let div=document.getElementById('container')


let addButton=document.getElementById('add')
addButton.addEventListener('click',addItem)


let removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

let resetButton=document.getElementById('reset')
resetButton.addEventListener('click',resetList)



function addItem(){
    var input=document.getElementById('input')
    //console.log(input.value)
    var text=input.value
    var textNode=document.createTextNode(input.value)
    if (text==='') {
        let para=document.createElement('p')
        para.textContent='Kuch likh to de '
        div.insertBefore(para,div.childNodes[2])
         //console.log('chala')
         setTimeout(()=>{
            para.className='visual2'
            div.removeChild(para)
         },1500)
         return false
        
        



        
    }else{
    
    li=document.createElement('li')
    var checkbox=document.createElement('input')
    checkbox.type='checkbox'
    checkbox.setAttribute('id','check')
    var label=document.createElement('label')
    ul.appendChild(label)
    li.appendChild(checkbox)
    label.appendChild(textNode)
    li.appendChild(label)
    
    ul.insertBefore(li,ul.childNodes[0])
    
    
    
     setTimeout(() => {
        
        li.className = 'visual'
        
        
       
     }, 900);
    input.value=''

    }

}
function removeItem(){
 li=ul.children
//  for (let index = 0; index < li.length; index++) {
//      const element = li[index];
//      console.log(element)
// console.log(li)
 for (let index = 0; index < li.length; index++) {
    //  while(li[index].children[0].checked){
    //      ul.removeChild(li[index])
    //      index++
    if (li[index].children[0].checked) {
        ul.removeChild(li[index])
        index--

    }
     
 }
 
}
function resetList(){
    li=ul.children
    for (let index = 0; index < li.length; index++) {
        ul.removeChild(li[index])
        index--
        
    }
}