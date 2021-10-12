function settingDate(date, day)
{
date = new Date(date);
date.setDate(day);
date.setHours(23);
return date;
}

function getDatesBetween(date1, date2)
{
let range1 = new Date(date1);
let range2 = new Date(date2);
date1 = settingDate(date1, 31);
date2 = settingDate(date2, 31);
let temp;
while(date1<=date2)
{
 if(date1.getDate()!=31)
  {
  temp=settingDate(date1,0); 
  }
console.log(date1 + "" + date2);
}
  
let content = getDatesBetween("2020/01/01", "2021/01/01");
document.getElementById("calender").innerHTML = content;
