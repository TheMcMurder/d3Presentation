var body = d3.select('body')
body.selectAll("*").remove();


var svg = body.append('svg')
	.attr({'height': 1000, 'width': 1000})

//**********************************************************************************
// Face
//**********************************************************************************
var face_group = svg.append('g')
	.attr('transform', 'translate(300,300)')

var face = face_group.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':250})

face.style('fill', 'orange')

//**********************************************************************************
// Eyes
//**********************************************************************************
var eyegroup = face_group.append('g')
	.attr('transform', 'translate(-75, -75)')


//**********************************************************************************
// left White
//**********************************************************************************
eyegroup.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':30})
	.style('fill', 'white')
//**********************************************************************************
// Right White
//**********************************************************************************
eyegroup.append('circle')
	.attr({'cx': 150, 'cy': 0, 'r':30})
	.style('fill', 'white')

var pupil_group = eyegroup.append('g')
.attr('transform', 'translate(-15,0)')

//**********************************************************************************
// left pupil
//**********************************************************************************
pupil_group.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':10})
	.style('fill', 'black')

//**********************************************************************************
// right pupil
//**********************************************************************************
pupil_group.append('circle')
	.attr({'cx': 150, 'cy': 0, 'r':10})
	.style('fill', 'black')


//**********************************************************************************
// smile
//**********************************************************************************

//**********************************************************************************
// smileGroup
//**********************************************************************************
var smile_group = face_group.append('g')
	.attr('transform', 'translate(0, 100)')
//**********************************************************************************
// smile Line
//**********************************************************************************
smile_group.append('line')
	.attr('x1', -50)
	.attr('y1', 0)
	.attr('x2', 50)
	.attr('y2', 0)
	.attr('stroke', 'black')
	.attr('stroke-width', 5)

//**********************************************************************************
// interval function:
//
// this native javascipt function is set on repeat.  Every 2 seconds it will fire
// until you clear the interval with the clearInterval function
//
//   This interval is translating the pupil_group to the right 15 pixels every 2
//   seconds.  It also calls the setTimeout function which operates exactly like an
//   interval except it only fires once.  
//   
//   In short the interval moves the eyes every two seconds but once it fires the 
//   timeout waits one second then moves them back.  Creating once second (1000 ms)
//   on each side
//**********************************************************************************
var interval = setInterval(function(){
	pupil_group.transition()
		.attr('transform', 'translate(15, 0)')
	setTimeout(function(){
		pupil_group.transition()
			.attr('transform', 'translate(-15, 0)')
	}, 1000)
},2000)



