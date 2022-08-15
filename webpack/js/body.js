import $ from 'jquery';
import  _ from 'lodash';
import '../css/body.css';

let count = 0;

const par2 = $("<p></p>").text("Dashboard data for the students");
const but = $("<button></button>").text("Click here to get started")
const par3 = $("<p id='count'></p>");
const wrap =$('<div></div>').append(but, par3);

$("body").append(par2, wrap);

$("button").on('click' ,_.debounce( updateCounter, 1000))

function updateCounter(){
    count++;
    $("#count").text(`${count} clicks on the button`);
}
