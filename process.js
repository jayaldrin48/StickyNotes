
var color=[];
var colors;
var content=[];
var listCount = 0;
var totalNotes = 0;
var state = "no";
var left = "<";
var right = ">";

let process = {
	menu:function(){
		let content = 
		<div class="bg">
			<div class="navbar theme-red">
				<div class="navbar-inner">
					<div class="left">
						<a href="#">+</a>
					</div>
					<div class="center" onClick={process.addnewNote} id="title">Add new note</div>
				</div>
			</div>
			<div class="note-div" id="note-div">
				<div id="main">
					<div class="date-time" id="DT"></div>
				</div>
				<div class="text-field" id="text-field">
					<textarea id="text" placeholder="Enter you note here"></textarea>
				</div>
				<div class="btns-cn">
				<button class="savebtn" id="savebtn" onClick={save}>Save</button> 
				</div>
			</div>
			<div id="board"></div>
		</div>;
		ReactDOM.render(content,document.getElementById('root'));
	},
	addnewNote:function(){
		//var btn = document.getElementById('addbtn');
		//btn.setAttribute('onclick','save()');
		document.getElementById('text-field').style.display = "block";
		document.getElementById('note-div').style.display = "block";
		//document.getElementById('main').style.display = "none";
		//document.getElementById('addbtn').style.display = "none";
		//document.getElementById('Lbtn').style.display = "none";
		//document.getElementById('Rbtn').style.display = "none";	
		document.getElementById('savebtn').style.display = "block";
	}
}
	
function save() {
		var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var am_pm;
	if(hours > 12){
		hours = hours - 12;
		am_pm = "PM";
	}else{
		am_pm = "AM";
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	var day = date.getDate();
	var month = date.getMonth();
	var monthX;
	month += 1;
	if(month === 12){
		monthX = "Dec";
	}
	//console.log(hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day);
	var today = hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day;
	document.getElementById('DT').innerText = today;

	document.getElementById('note-div').style.display = "none";
	var content = document.getElementById('text').value;
	var parent = document.createElement('div');
	parent.style = "width:500px;height:700px;margin-left:200px;";
	var p1 = document.createElement('p');
	p1.innerText = today;
	p1.style="width:350px;margin-top:10px;margin-left:33px;position:absolute;font-size:20pt;";
	parent.appendChild(p1);
	var p2 = document.createElement('textarea');
	p2.innerText = content;
	p2.style="width:400px;height:300px;border-style:none;background-color:rgba(0,0,0,0);margin-top:190px;margin-left:30px;position:absolute;font-size:27pt;";
	parent.appendChild(p2);
	var img = document.createElement('img');
	img.src = "./img/note.png";
	img.style = "width:90%;height:80%;positiona:absolute;";
	parent.appendChild(img);
	document.getElementById('board').appendChild(parent);
}

process.menu();
/*now();

function now(){
	var date = new Date();
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var am_pm;
	if(hours > 12){
		hours = hours - 12;
		am_pm = "PM";
	}else{
		am_pm = "AM";
	}
	if(hours < 10){
		hours = "0" + hours;
	}
	if(minutes < 10){
		minutes = "0" + minutes;
	}
	var day = date.getDate();
	var month = date.getMonth();
	var monthX;
	month += 1;
	if(month === 12){
		monthX = "Dec";
	}
		var today = hours+":"+minutes+" "+am_pm+"   "+monthX+" "+day;
	
		document.getElementById('DT').innerText = today;
		setTimeout(today,1000);
}
*/





