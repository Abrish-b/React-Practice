import $ from 'jquery';
import '../css/header.css';
$("body").append('<div id="logo"></div>');
const par1 = $("<p></p>").text("Holberton Dashboard");
$("body").append(par1);

console.log('Init header');