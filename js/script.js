$(document).ready(function(){
apiBase = 'http://statenweb.mockable.io/conversions/';
});

$('.toCm').on('click', function(){
axios.get(apiBase).then(function(response){
try{
let conversionRate = response.data.centimetersInInch;
let inches = parseFloat($('#toCm_Input').val());
if(isNaN(inches)) {
 throw "Input must be a number";
}
$('#toCm_Output').html((inches*conversionRate).toString()+' cm');
}
catch(e){
$('#toCm_Input').val('');
$('#toCm_Output').html('To Centimeters');
alert(e);
}
});

$('#toCm_Output').html('converting');
});

$('.toIn').on('click', function(){
axios.get(apiBase).then(function(response){
try{
let conversionRate = response.data.inchesInCm;
let centimeters = parseFloat($('#toIn_Input').val());
if(isNaN(centimeters)) {
 throw "Input must be a number";
}
$('#toIn_Output').html((centimeters*conversionRate).toString()+' in');
}
catch(e){
$('#toIn_Input').val('');
$('#toIn_Output').html('To Inches');
alert(e);
}
});

$('#toIn_Output').html('converting');
});