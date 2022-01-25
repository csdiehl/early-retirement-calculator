import React, { useEffect } from "react";
import * as d3 from "d3";

const Chart = (props) => {
  const height = 500;
  const width = 800;
  const padding = 30;

 
  useEffect(() => {
   
      const svg = d3.select("svg").attr("height", height).attr("width", width);
  
      const xScale = d3
      .scaleLinear()
      .domain([1, d3.max(props.data, (d) => d.year)])
      .range([padding, width - padding]);
  
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(props.data, (d) => d.savings)])
      .range([height - padding, padding]);
  
    svg
      .append("path")
      .datum(props.data)
      .attr("fill", "#cce5df")
      .attr("stroke", "#69b3a2")
      .attr("d", d3.area()
      .x(d => xScale(d.year))
      .y0(yScale(0))
      .y1(d => yScale(d.savings))
      )
    

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
