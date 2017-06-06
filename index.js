var outputElem = document.body;
 outputElem.innerText = "text";

function getWeather(){
  var xhr = new XMLHttpRequest;

  xhr.open('GET', 'https://marsweather.ingenology.com/v1/latest/');
  xhr.onreadystatechange = function(){
    if(xhr.readyState !== 4) return;
    if(xhr.status !== 200){
      alert("error " + xhr.status + ": " + xhr.statusText);
      return;
    }
    console.log(xhr.response)
//    weather = JSON.parse(xhr.response).report;
//    outputElem.innerText = "the weather on Mars"
  }
  outputElem.innerText = "...";
  xhr.send();
}