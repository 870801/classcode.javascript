const form=document.querySelector('form');
const eventcards=document.querySelector('.cards');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(eventTitle.value)
    console.log(eventDate.value)
    console.log(category.value)
    console.log(description.value)

    let title=eventTitle.value;
    let date=eventDate.value;
    let cat=category.value;
    let desc=description.value;


    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>${title}</h3>
    <p>${date}</p>
    <button>${cat}</button>
    <p>${desc}</p>
    <div class="dlt">x</div>`


    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })

})
document.addEventListener('keydown',(e)=>{
    // console.log(e.key)
})

document.querySelector('.clearall').addEventListener('click',()=>{
    document.querySelectorAll('.card').forEach(card => {
        card.remove();
    })
})


document.querySelector('.sample').addEventListener('click',()=>{
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>Sample Event</h3>
    <p>2024-02-03</p>
    <button>workshop</button>
    <p>this is sample event</p>
    <div class="dlt">x</div>`

    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })
})
document.querySelector('.sample').addEventListener('click',()=>{
    const card=document.createElement('div');
    card.classList.add('card');
    card.innerHTML=`
    <h3>Sample Event.1</h3>
    <p>2024-03-03</p>
    <button>meetup</button>
    <p>this is sample event</p>
    <div class="dlt">x</div>`

    eventcards.appendChild(card);
    const dlt=card.querySelector('.dlt')
    dlt.addEventListener('click',()=>{
        card.remove();
    })
})
document.addEventListener("keydown", function (event) {
  const output = document.getElementById("keyOutput");

  if (output) {
    output.textContent = "You pressed: " + event.key;
  }
});








// async function send data(){
//     const responce=wait fetch('https;//dummyjyson.com/products'){
//           method:'post',
//           Headers:{
//             "content-type":"application/jyson"

//           }
//           body: jyson.stringfy({
//             title:"new product",
//             description:"this is a new product",
//             price:100,
//             discountpercentage:10;
//             ration:4.5,
//             stock:50,
//           })

//     }
    
// }
// const data="await"responce.jyson()
// console.log daata




localstorage.settime("name","alex")
localstorage.settime("age","34")

console.log(localStorage.getitem("name"))
console.log(localstorage.getitme("age"))

localstorage.removeitem("name")
console.log(localStorage,gettime(("name")))


sessionStorage.setitem("name","alex")
sessionStorage.setitem("Age",34)

document.cookie="name=alex;;expires=wed 25 feb 2026 23:59:59 getitme"
document.cookie="age=34;expires=wed 25 feb 2026 23:59:59 getitme"
console.log(document.cookie)



function generate(){
    let index=2501730286
    while(true){
        yield index
        index++

    }
}
const gen=generate()
console.log(gen)
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())

function add(a){
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}

const first=add(1)
console.log(first)
const second=first(2)
console.log(second)
console.log(second(3))







