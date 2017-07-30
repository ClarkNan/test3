// 燒烤計算測試

document.getElementById('countId').onclick = function (){
	var light = 888 + (888*0.1);
	var hight = 489 + (489*0.1);
	var soso = 429 + (429*0.1);
	var lightPrice = parseInt(document.getElementById('lightId').value)*light;
	var hightPrice = parseInt(document.getElementById('hightId').value)*hight;
	var sosoPrice = parseInt(document.getElementById('sosoId').value)*soso;
	document.getElementById('totalId').textContent = lightPrice + hightPrice + sosoPrice
}