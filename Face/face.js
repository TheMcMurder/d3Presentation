var body = d3.select('body')
body.selectAll("*").remove();


var svg = body.append('svg')
	.attr({'height': 1000, 'width': 1000})

//face
var face_group = svg.append('g')
	.attr('transform', 'translate(300,300)')

var face = face_group.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':250})

face.style('fill', 'orange')

//eyes
var eyegroup = face_group.append('g')
	.attr('transform', 'translate(-75, -75)')


//left white
eyegroup.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':30})
	.style('fill', 'white')
// right white
eyegroup.append('circle')
	.attr({'cx': 150, 'cy': 0, 'r':30})
	.style('fill', 'white')

var pupil_group = eyegroup.append('g')
.attr('transform', 'translate(-15,0)')

//left pupil
pupil_group.append('circle')
	.attr({'cx': 0, 'cy': 0, 'r':10})
	.style('fill', 'black')

//right pupil
pupil_group.append('circle')
	.attr({'cx': 150, 'cy': 0, 'r':10})
	.style('fill', 'black')


//smile

//smile group
var smile_group = face_group.append('g')
	.attr('transform', 'translate(0, 100)')
//smile line
smile_group.append('line')
	.attr('x1', -50)
	.attr('y1', 0)
	.attr('x2', 50)
	.attr('y2', 0)
	.attr('stroke', 'black')
	.attr('stroke-width', 5)

var interval = setInterval(function(){
	pupil_group.transition()
		.attr('transform', 'translate(15, 0)')
	setTimeout(function(){
		pupil_group.transition()
			.attr('transform', 'translate(-15, 0)')
	}, 1000)
},2000)



