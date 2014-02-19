

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
		this.renderingFlag = false;
		
		
		this.pie = pie = d3.layout.pie()
		.value(function (d) {
			return d[1];
		});
		this.container_group.attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
		

		this.centerGroup = this.container_group.append("g")
		// var rect = this.centerGroup.append('circle')
		// .attr("cx", (150/2))
		// .attr('cy', (150/2))
		// .attr("r", 100)
		// .style("fill", '#e4e5e5')
		// .attr("opacity", '.5')
		this.centerGroup.attr("transform", "translate(" + (-(150/2)) + "," + (-(150/2)) + ")")
		this.DataValue = this.centerGroup.append("text")
		.text("")
		.attr("transform", "translate(" + ((150/2)) + "," + ((150/2)) + ")")
		.style("text-anchor", "middle")
		.style('font-size', 32)
		.style("font-family", "Ubuntu")
		this.DataName = this.centerGroup.append("text")
		.text("")
		.attr("transform", "translate(" + ((150/2)) + "," + ((150/2) + (150/4)) + ")")
		.style("text-anchor", "middle")
		.style("font-family", "Ubuntu")
		.style('font-size', 18)




		this.dataset(this.data)

	},
	tween: function(){
		var arc = this.arc
		var arcs = this.arcs
		var center = this.center

		

		

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
		var value = this.DataValue;
		var name = this.DataName;
		var renderingFlag = this.renderingFlag



		this.arcs = this.container_group.selectAll(".arc")
		.data(this.pie(this.data))

		var color = this.color


		this.arcs.enter()		
		.append("path")
		.attr('class', 'arc')
		.attr("fill", function(d, i) { return color(i); })
		.each(function (d){
			this._current = {startAngle: 0, endAngle: 0};
		})

		this.arcs.on('mouseover', function(d, i){
			if(!renderingFlag){
				center(d, i);	
			}
			
		})

		this.arcs.on('mouseout', function(){

			off();
		})
		//update here
		

		// this.arcs.attr("d", arc)	

		this.tween();

		this.arcs.exit().remove();
		this.renderingFlag = false;
		renderingFlag = this.renderingFlag;



		
		function off(){

			value.text('')
			name.text('')
		}
		function center(data, i){

			value.text(data.data[1])
			.attr("fill", color(i));
			name.text(data.data[0])
			.attr("fill", color(i));


		}


	},
	dataset: function(data){

		this.data = data;
		this.build(this.data)
	}
	

}