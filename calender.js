function getDatesBetween(date1, date2)
{
let range1 = new Date(date1);
let range2 = new Date(date2);
console.log(range1 + " " + range2);
}
  
let content = getDatesBetween("2020/01/01", "2021/01/01");
document.getElementById("calender").innerHTML = content;
