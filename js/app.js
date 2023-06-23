document.getElementById("htmlCode").value="<div>\n\n</div>";
document.getElementById("cssCode").value="<style>\n\n</style>";
document.getElementById("jsCode").value="<script>\n\n</script>";

document.getElementById('refreshButton').addEventListener('click', function() {
    localStorage.clear(); // Clear all saved code
    location.reload(); // Refresh the page
});

// Retrieve the saved code from localStorage on page load
window.addEventListener('load', function() {
    var savedHTMLCode = localStorage.getItem('htmlCode');
    var savedCSSCode = localStorage.getItem('cssCode');
    var savedJSCode = localStorage.getItem('jsCode');
  
    if (savedHTMLCode) {
      document.getElementById('htmlCode').value = savedHTMLCode;
    }
  
    if (savedCSSCode) {
      document.getElementById('cssCode').value = savedCSSCode;
    }
  
    if (savedJSCode) {
      document.getElementById('jsCode').value = savedJSCode;
    }
  
    showPreview(); // Update the preview on page load
});

function showPreview(){
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = ""+document.getElementById("cssCode").value+"";
    var jsCode = ""+document.getElementById("jsCode").value+"";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}

function saveCode() {
    var htmlCode = document.getElementById('htmlCode').value;
    var cssCode = document.getElementById('cssCode').value;
    var jsCode = document.getElementById('jsCode').value;
  
    localStorage.setItem('htmlCode', htmlCode);
    localStorage.setItem('cssCode', cssCode);
    localStorage.setItem('jsCode', jsCode);
  
    showPreview(); // Update the preview whenever code changes
}

// Save code to localStorage on every change
document.getElementById('htmlCode').addEventListener('input', saveCode);
document.getElementById('cssCode').addEventListener('input', saveCode);
document.getElementById('jsCode').addEventListener('input', saveCode);

function show(x){
    document.getElementById("html").style.display="none";
    document.getElementById("css").style.display="none";
    document.getElementById("js").style.display="none";
    document.getElementById("result").style.display="none";
    document.getElementById(x).style.display="block";
}

function show_all(){
    if(window.innerWidth>=992)
    {
        document.getElementById("html").style.display="block";
        document.getElementById("css").style.display="block";
        document.getElementById("js").style.display="block";
        document.getElementById("result").style.display="block";
    }
    if(window.innerWidth<992 && document.getElementById("html").style.display=="block")
    {
        document.getElementById("css").style.display="none";
        document.getElementById("js").style.display="none";
        document.getElementById("result").style.display="none";
    }
}
