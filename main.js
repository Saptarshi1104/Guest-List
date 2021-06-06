var name_of_the_guests_entered = [];

function submit()
{
var guest_name = document.getElementById("input_enter_name").value;
name_of_the_guests_entered.push(guest_name);
console.log(guest_name);

console.log(name_of_the_guests_entered);
var length_of_name = name_of_the_guests_entered.length;
console.log(length_of_name);

document.getElementById("guest_names").innerHTML = name_of_the_guests_entered;
}
function sorting()
{
var sorted_value = name_of_the_guests_entered.sort().join(" ");
console.log(sorted_value);
document.getElementById("guest_sorted_list").innerHTML = sorted_value;
}
function show()
{
var guest_list = name_of_the_guests_entered.join(" ");
console.log(guest_list);
document.getElementById("show_guest_list").innerHTML = guest_list;
}
function searching()
{
var s = document.getElementById("input_search_name").value;
var found = 0;
var j;
for(j=0; j<name_of_the_guests_entered.length; j++){
if(s == name_of_the_guests_entered[j]){
found = found + 1;
}
}
document.getElementById("show_how_many_times").innerHTML = "Name Found " + found + " Time/s";
console.log("found name" + found + "time/s");
}