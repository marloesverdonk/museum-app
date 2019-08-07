function doesNotPassValidations(name, msg){
    if(!name || !msg){
        alert('You forgot to fill in your name or message!')
        return true
    }
    
    if(msg.length > 10){
        alert('You used too many characters')
        return true
    }

    return false
}

function submitComment(){
     
const inputField = document.getElementById('name');
const name = inputField.value
console.log(name);

const messageField = document.getElementById('msg');
const msg = messageField.value
console.log(msg);

if (doesNotPassValidations(name, msg)){
    return null
}


const comment = document.createElement('section');
const h3 = document.createElement('h3');
const p = document.createElement("p");

h3.innerHTML = `${name} said:`;
p.innerHTML = msg;
comment.classList.add('comment')
comment.appendChild(h3)
comment.appendChild(p)


const commentSection = document.getElementById('comments')
console.log(commentSection)

commentSection.appendChild(comment)

inputField.value = null
messageField.value = null

}