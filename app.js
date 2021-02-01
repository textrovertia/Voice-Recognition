const button=document.querySelector('.talk')
const content=document.querySelector('.content')

const greetings=[
    "I'm good you big beautiful person",
    "Doing good", 
    "I'm a little tired"
]

    const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition=new SpeechRecognition();

    recognition.onstart=function(){
        console.log('Voice activated')
    }

    recognition.onresult=function(event){
        //event holds a string of what we said 
        const current=event.resultIndex;
        const transcript=event.results[current][0].transcript
        content.textContent=transcript
        readOutLoud(transcript)

    }

    button.addEventListener('click', ()=>{
        recognition.start()
    })




function readOutLoud(message){
    const speech=new SpeechSynthesisUtterance();
    speech.text="I'm not sure what you said"

    if  (message.includes('you')){
       const finalText=greetings[Math.floor(Math.random()*greetings.length)]
        speech.text=finalText
    }

   
    speech.volume=1; //as loud as possible
    speech.rate=1;
    
    speech.pitch=1;

    window.speechSynthesis.speak(speech)

}