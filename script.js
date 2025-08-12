
function calcPrice(){
  const area = Math.max(1, parseFloat(document.getElementById('area').value||0));
  const type = document.getElementById('type').value;
  const light = document.getElementById('light').value;
  const base = { matte:700, gloss:750, satin:800, float:1100 };
  let price = area*(base[type]||700);
  if(light==='spot10') price += 10*400;
  if(light==='spot20') price += 20*380;
  if(light==='track') price += 5200;
  if(price<7000) price = 7000;
  document.getElementById('price').textContent = new Intl.NumberFormat('ru-RU').format(Math.round(price))+' ₽';
  document.getElementById('waLead').href = 'https://wa.me/79119101102?text='+encodeURIComponent('Здравствуйте! Предварительный расчёт: ~'+Math.round(price)+' ₽.');
}
document.addEventListener('DOMContentLoaded',()=>{
  document.getElementById('calcBtn').addEventListener('click',e=>{e.preventDefault();calcPrice();});
});
