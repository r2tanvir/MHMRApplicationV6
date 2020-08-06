function goBack() {
window.history.back();}

var id;
var gotId;

var id_cate;
var gotId_cate;
var selected=1;

function categoriesSelected(id_cate){
  gotId_cate=id_cate;
  if (gotId_cate=="health-symptoms"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/fq7cfz6s82n2f7u/hs_random.png?raw=1";
    document.getElementById('none').focus();
    document.getElementById('image-button').style.visibility = "hidden";
    selected=2;
  }
  if (gotId_cate=="top-10"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/xbllf4n6qus8z22/top10_random.png?raw=1";
    document.getElementById('none').focus();
    selected=1;
    document.getElementById('image-button').style.visibility = "visible";

  }
  if (gotId_cate=="more-description"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/dr9xcp65dfml9mg/adj_random.png?raw=1";
    document.getElementById('none').focus();
    selected=3;
    document.getElementById('image-button').style.visibility = "hidden";

  }
}

function giveId(id){
  gotId=id;

  switch (gotId) {
    case "alpha":
            document.getElementById('image-button').style.visibility = "hidden";

            if(selected==2){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/l7yl46977cbqjqh/hs_alphabetical.png?raw=1";
            }
            else if(selected==3){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/ep9zyqhc96e9d0w/adj_alphabetical.png?raw=1";
            }
            else{
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/tbzyd7nnmdo81e6/top10_alphabetical.png?raw=1";
            }
            break;

    case "high":
            document.getElementById('image-button').style.visibility = "hidden";

            if(selected==2){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/j3p7stplvis6g39/hs_highest_to_lowest.png?raw=1";
            }
            else if(selected==3){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/ewwjmjzxy05j9u0/adj_highest_to_lowest.png?raw=1";
            }
            else{
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/8zdmjw5f7c9tshp/top10_highest_to_lowest.png?raw=1";
            }
            break;
    case "pos":
            document.getElementById('image-button').style.visibility = "hidden";

            if(selected==2){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/pnw7v962fsj7xg6/hs_positive.png?raw=1";
            }
            else if(selected==3){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/i12v79g3elh4r4y/adj_positive.png?raw=1";
            }
            else{
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/gwox7epp8vbmhit/top10_positive.png?raw=1";
            }
            break;
    case "range":
            document.getElementById('image-button').style.visibility = "hidden";

            if(selected==2){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/52vnrdtu1lqbksf/hs_ranges.png?raw=1";
            }
            else if(selected==3){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/r8ok8y71p8kad6c/adj_ranges.png?raw=1";
            }
            else{
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/5jkvinf7ckhh93l/top10_ranges.png?raw=1";
            }
            break;
    case "none":
            if(selected==2){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/fq7cfz6s82n2f7u/hs_random.png?raw=1";
            }
            else if(selected==3){
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/dr9xcp65dfml9mg/adj_random.png?raw=1";
            }
            else{
              document.getElementById('image-button').style.visibility = "visible";
              document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/xbllf4n6qus8z22/top10_random.png?raw=1";
            }
            break;
    default:
            break;

  }
}
