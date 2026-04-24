let container = document.getElementById("container");
let searchinput = document.getElementById("input");
let wrapper = document.getElementById("wrapper");
let datas = [
{"id":1,"question":"What is the past tense of the verb 'to go'?","options":["Goes","Went","Gone","Going"],"answer":"Went","level":"Beginner"},
{"id":2,"question":"Which word is a synonym for 'happy'?","options":["Sad","Angry","Joyful","Tired"],"answer":"Joyful","level":"Beginner"},
{"id":3,"question":"Choose the correct article: I saw ___ elephant at the zoo.","options":["a","an","the","no article"],"answer":"an","level":"Beginner"},
{"id":4,"question":"Identify the adjective in the sentence: 'The blue sky is beautiful.'","options":["Sky","Blue","Is","The"],"answer":"Blue","level":"Beginner"},
{"id":5,"question":"What is the plural form of 'child'?","options":["Childs","Childrens","Children","Childes"],"answer":"Children","level":"Intermediate"},
{"id":6,"question":"Which sentence is in the Present Perfect tense?","options":["I am eating lunch.","I ate lunch.","I have eaten lunch.","I will eat lunch."],"answer":"I have eaten lunch.","level":"Intermediate"},
{"id":7,"question":"What does the idiom 'piece of cake' mean?","options":["Something delicious","Something very easy","A birthday party","To share food"],"answer":"Something very easy","level":"Intermediate"},
{"id":8,"question":"Select the correctly spelled word.","options":["Accomodate","Acomodate","Accommodate","Acommodate"],"answer":"Accommodate","level":"Advanced"},
{"id":9,"question":"What is the opposite of 'generous'?","options":["Kind","Selfish","Friendly","Wealthy"],"answer":"Selfish","level":"Intermediate"},
{"id":10,"question":"Finish the conditional: If I ___ rich, I would travel the world.","options":["am","was","were","be"],"answer":"were","level":"Advanced"},
{"id":11,"question":"Which of these is a 'conjunction'?","options":["Run","Quickly","Because","Happiness"],"answer":"Because","level":"Intermediate"},
{"id":12,"question":"What is a 'noun'?","options":["An action word","A person, place, or thing","A word that describes a verb","A word that shows emotion"],"answer":"A person, place, or thing","level":"Beginner"}

]
function render (data){
    let cards = datas.map(el => `
        <div class="card">
             <img class="rasm"  src="https://picsum.photos/200/300?random=${el.id} " alt="rasm">
              <h1 class="">${el.answer}</h1>
              <p>${el.question}</p>
              <a href="#">${el.options}</a>
        </div>
        `).join("");
        wrapper.innerHTML = cards;
}
 render (datas);
