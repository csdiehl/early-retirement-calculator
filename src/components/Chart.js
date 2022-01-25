import React, { useEffect } from "react";
import * as d3 from "d3";

const Chart = (props) => {
  const height = 500;
  const width = 800;
  const padding = 30;

 
  useEffect(() => {
   
      const svg = d3.select("svg").attr("height", "500").attr("width", "800");
  
      const xScale = d3
      .scaleLinear()
      .domain([1, d3.max(props.data, (d) => d.year)])
      .range([padding, width - padding]);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(props.data, (d) => d.savings)])
      .range([height - padding, padding]);
  
    svg
      .selectAll()
      .data(props.data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.savings))
      .attr("r", 5)
      .attr("fill", "#FFF");
    

    return function() {
      document.getElementById('chart').innerHTML = ''
    }
  }, [props.data]);

  return (
    <div>
      <h1>This will be a Chart</h1>
      <svg id="chart"></svg>
    </div>
  );
};

export default Chart;
