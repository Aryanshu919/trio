let definition ="";
let word = "";
document.addEventListener("mouseup", function(){
   const selectedText = window.getSelection().toString().trim();
   word = selectedText;
   console.log(selectedText);
   fetchDefinition(selectedText);
   
});

function fetchDefinition(selectedText){
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${selectedText}`)
    .then(response => response.json())
    .then(data => {
         definition = data[0]?.meanings[0]?.definitions[0]?.definition;
        console.log(definition);
    })
    .catch(error =>{
         console.log(error);
    })
    }


function showDefinition(word, definition) {
   let tooltip = document.createElement('div');
   tooltip.className = 'definition-tooltip';
   tooltip.innerHTML = `<strong>${word}</strong>: ${definition}`;
   document.body.appendChild(tooltip);

   // Position the tooltip near the selected text
   let rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
   tooltip.style.left = `${rect.left + window.scrollX}px`;
   tooltip.style.top = `${rect.bottom + window.scrollY}px`;

   // Remove tooltip after a few seconds
   setTimeout(() => {
       tooltip.remove();
   }, 5000);
}
showDefinition(word,definition);