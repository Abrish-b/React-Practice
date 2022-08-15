import $ from 'jquery';
import  _ from 'lodash';
import '../css/main.css';

let count = 0;
$("body").append('<div id="logo"></div>');
const par1 = $("<p></p>").text("Holberton Dashboard");
const par2 = $("<p></p>").text("Dashboard data for the students");
const but = $("<button></button>").text("Click here to get started")
const par3 = $("<p id='count'></p>");
const wrap =$('<div></div>').append(but, par3);
const par4 = $('<p class="last"></p>').text("Copyright - Holberton School");


$("body").append(par1, par2, wrap, par4)


$("button").on('click' ,_.debounce( updateCounter, 1000))

function updateCounter(){
    count++;
    $("#count").text(`${count} clicks on the button`);
}