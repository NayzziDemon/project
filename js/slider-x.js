function slider_1()
{
ris = new Array('C:/Users/danb9/Desktop/src/assets/img/glazing/standart/1.jpg', 'C:/Users/danb9/Desktop/src/assets/img/glazing/standart/2.jpg', 'C:/Users/danb9/Desktop/src/assets/img/glazing/standart/3.jpg');
if (i >=3) i = 0;
r=document.getElementById('slide-1')
r.src=ris[i];
i++; 
setTimeout(slider_1, 1500);
}