
function goBack() {
window.history.back();}

var id;
var gotId;
var checked;
var morepain1;
var morepain2;
var lesspain1;
var lesspain2;

function categoriesSelected(id){
  morepain1=document.getElementById('morepain-button1')
  morepain2=document.getElementById('morepain-button2')
  lesspain1=document.getElementById('lesspain-button1')
  lesspain2=document.getElementById('lesspain-button2')

  gotId=id;
  if (gotId=="positive"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/ec6s62kk4gcgc0m/text_graph_positive.png?raw=1";
    document.getElementById("toggle_button").disabled=true;
    document.getElementById("toggle_button").checked=true;
    morepain1.style.visibility="hidden"
    morepain2.style.visibility="hidden"
    lesspain1.style.visibility="visible"
    lesspain2.style.visibility="visible"

  }
  if (gotId=="negative"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/wwm3d89txgiyk9u/text_graph_negative.png?raw=1";
    document.getElementById("toggle_button").disabled=true;
    document.getElementById("toggle_button").checked=true;
    morepain1.style.visibility="visible"
    morepain2.style.visibility="visible"
    lesspain1.style.visibility="hidden"
    lesspain2.style.visibility="hidden"
  }
  if (gotId=="showBoth"){
      document.getElementById("toggle_button").disabled=false;
      document.getElementById("toggle_button").checked=false;
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/o8sh4mx5txbh0ap/text_graph_uncolored.png?raw=1";
      morepain1.style.visibility="visible"
      morepain2.style.visibility="visible"
      lesspain1.style.visibility="visible"
      lesspain2.style.visibility="visible"
  }
  return gotId;
}

function color(checked){
  morepain1=document.getElementById('morepain-button1')
  morepain2=document.getElementById('morepain-button2')
  lesspain1=document.getElementById('lesspain-button1')
  lesspain2=document.getElementById('lesspain-button2')
  if(gotId=="showBoth" && checked){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/88hg750zd3e6np0/text_graph_colored.png?raw=1";
    morepain1.style.visibility="visible"
    morepain2.style.visibility="visible"
    lesspain1.style.visibility="visible"
    lesspain2.style.visibility="visible"
  }
  else if (gotId=="showBoth" && !checked)
  document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/o8sh4mx5txbh0ap/text_graph_uncolored.png?raw=1";
  morepain1.style.visibility="visible"
  morepain2.style.visibility="visible"
  lesspain1.style.visibility="visible"
  lesspain2.style.visibility="visible"
}
