function goBack() {
window.history.back();}

var id;
var gotId;
var point1;
var point2;
var point3;
var point4;
var checked;

function categoriesSelected(id){
  gotId=id;
  point1 = document.getElementById("point1");
  point2 = document.getElementById("point2");
  point3 = document.getElementById("point3");
  point4 = document.getElementById("point4");

  if (gotId=="gsummary"){
      point1.innerHTML = "The patient complained of pain and aches multiple times throughout the past 2 months";
      point2.innerHTML = "On most occasions, complaints of pain and aches were mentioned with “morning”"
      point3.innerHTML = "The patient complained a lot about being tired";
      point4.innerHTML = "The patient mentioned walking being easy multiple times"
  }
  if (gotId=="qsummary"){
      point1.innerHTML = "59/72 videos mentioned “pain” with a total account of 90 mentions";
      point2.innerHTML = "43/72 videos mentioned “morning” with a total account of 49 mentions";
      point3.innerHTML = "28/72 videos mentioned “stressful” with a total account of 31 mentions";
      point4.innerHTML = "19/72 videos mentioned “aches” with a total account of 35 mentions";
  }

}

function switchChecked (checked){
  console.log(checked)
  point1 = document.getElementById("point1");
  point2 = document.getElementById("point2");
  point3 = document.getElementById("point3");
  point4 = document.getElementById("point4");

  if(checked){
    point1.style.color="DarkSlateBlue";
    point2.style.color="DarkSlateBlue";
    point3.style.color="DarkSlateBlue";
    point4.style.color="DarkSlateBlue";
  }
  else{
    point1.style.color="Black";
    point2.style.color="Black";
    point3.style.color="Black";
    point4.style.color="Black";
  }
}
