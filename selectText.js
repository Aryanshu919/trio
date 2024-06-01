document.addEventListener("mouseup", function(){
   const selectedText = window.getSelection().toString().trim();
   console.log(selectedText);
});