import $ from "jquery";

const txt_1 = $("<p></p>").text('Holberton Dashboard')
const txt_2 = $("<p></p>").text('Dashboard data for the students')
const txt_3 = $("<p></p>").text('Copyright - Holberton School')
$("body").append( txt_1, txt_2, txt_3);