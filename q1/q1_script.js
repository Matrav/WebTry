
var text1;
document.getElementById("runBtn").addEventListener("click", function(){
text1 = document.getElementById("text").value;
document.getElementById('inputText').innerHTML = text1;
});
document.getElementById("templateBtn").addEventListener("click", function(){
text1 = document.getElementById("text").value;
document.getElementById('text').value= "<!DOCTYPE html>\n<html>\n<head>\n<title></title>\n\n</head>\n<body>\n\n</body>\n</html>";
});
function saveTextAsFile()
{
    var textToSave = document.getElementById("text").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
    var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
 
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
 
    downloadLink.click();
}
 
function destroyClickedElement(event)
{
    document.body.removeChild(event.target);
}
 
function loadFileAsText()
{
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) 
    {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("text").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
// Get the button that opens the modal
var btn = document.getElementById("loadBtn");
var btn2 = document.getElementById("sBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

btn2.onclick = function() {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
	else if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
