var svg = d3.select('.svghere').append('svg')
var pieChart_group = svg.append('g')


var data = [
["Xbox One", 100],
["Playstation 4", 15],
["Sony 4kTV", 5]  
]  

var data2 = [
["Xbox One", 50],
["Playstation 4", 50],
["Sony 4kTV", 50]
// ["Something", 120]
] 




var pie = new pieChart(pieChart_group, data)

d3.select("#radio1").on("click", function(){
	pie.dataset(data)
})
d3.select("#radio2").on("click", function(){
	pie.dataset(data2)
})


// setTimeout(function(){
// 	pie.dataset(data2)
// }, 5000)
// pi.dataset()

// setTimeout(function(){
// 	pie.dataset(data)
// }, 10000)