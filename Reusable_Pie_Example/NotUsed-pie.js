var width = 500,
height = 500,
radius = Math.min(width, height) / 2;

var data;

data = [
["Xbox One", 100],
["Playstation 4", 15],
["Sony 4kTV", 5]  
]  

// data = d3.range(10).map(Math.random).sort(d3.descending);

// console.log(data)

var color = d3.scale.category20();

var arc = d3.svg.arc()
.outerRadius(radius - 10)
.innerRadius(radius - 70);

var pie = d3.layout.pie()
.value(function (d) {
	return d[1];
});

var svg = d3.select("body").append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var arcs = svg.selectAll("g.arc")
.data(pie(data))



arcs.enter().append("g")
.attr("class", "arc");

arcs.append("path")
.attr("fill", function(d, i) { return color(i); })
// .attr("d", arc)

.transition()
.duration(1000)
.attrTween("d", tweenDonutChart)


function tweenDonutChart(b) {
	console.log(b)
	b.innerRadius = 0;
	var i = d3.interpolate({startAngle: 0, endAngle: 0}, b);
	console.log(i)
	var myfunc = function(t) { return arc(i(t)); };
	return myfunc;
}