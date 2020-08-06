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
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/bv2f7v22im2kzfc/health_symptoms_original.png?raw=1";
    document.getElementById('none').focus();
    selected=2;
  }
  if (gotId_cate=="all-words"){
    document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/4qp10p2lww93n41/all_words_orginal.png?raw=1";
    document.getElementById('none').focus();
    selected=1;
  }
}
function giveId(id){
  gotId=id;
  //console.log(gotId);
  switch (gotId) {
    case "five":
      if(selected==2){
        document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/bv2f7v22im2kzfc/health_symptoms_original.png?raw=1";
        console.log("gell")
      }
      else{
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/w10lsm4r5ux6qo4/all_words_5.png?raw=1";}
      break;

    case "ten":
    if(selected==2){
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/bv2f7v22im2kzfc/health_symptoms_original.png?raw=1";
    }
    else{
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/2jw63bi22k0np2z/all_words_10.png?raw=1";}
      break;

    case "thirty":
    if(selected==2){
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/vxwp1fkc6bsyo4j/health_symptons_30.png?raw=1";
    }
    else{
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/z2ykwi0hio7ibw8/all_words_30.png?raw=1";}
      break;

    case "none":
    if(selected==2){
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/bv2f7v22im2kzfc/health_symptoms_original.png?raw=1";
    }
    else{
      document.getElementById("placeholder-image").src = "https://www.dropbox.com/s/4qp10p2lww93n41/all_words_orginal.png?raw=1";}
      break;

    default:
      break;
  }
}
