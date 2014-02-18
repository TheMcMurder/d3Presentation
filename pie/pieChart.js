

var pieChart = function(container_group, data){
	//constructor
	this.init(container_group, data);

}

pieChart.prototype = {

	init: function(container_group, data){
		this.data = data;
		this.color = d3.scale.category20();
		this.height = 500;
		this.width = 500;
		this.radius = 250;
		this.container_group = container_group;
		this.arc = d3.svg.arc()
		.outerRadius(this.radius - 10)
		.innerRadius(this.radius - 90);
		this.build_order = 0;
		
		this.pie = pie = d3.layout.pie()
		.value(function (d) {
			return d[1];
		});
		this.container_group.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
		this.dataset(this.data)

	},
	tween: function(){
		var arc = this.arc
		var arcs = this.arcs

		

		

		var build_order = this.build_order
		arcs.transition()
		.duration(1000)
		.attrTween("d", tweenDonutChart)



		function tweenDonutChart(b) {

			b.innerRadius = 0;
			var i;
			


			i = d3.interpolate(this._current, b);;
			this._current = i(0);
			// i = d3.interpolate({startAngle: 0, endAngle: 0}, b)		


			return function(t) { return arc(i(t)); };
		}


	},
	build: function(data){


		var arc = this.arc



		this.arcs = this.container_group.selectAll(".arc")
		.data(this.pie(this.data))

		var color = this.color


		this.arcs.enter()		
		.append("path")
		.attr('class', 'arc')
		.attr("fill", function(d, i) { return color(i); })
		.each(function (d){
			console.log(d)
			this._current = {startAngle: 0, endAngle: 0};
		})
		//update here
		

		// this.arcs.attr("d", arc)	

		this.tween();

		this.arcs.exit().remove();



		

		this.build_order ++;


	},
	dataset: function(data){

		this.data = data;
		this.build(this.data)
	}
	

}