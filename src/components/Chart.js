import React, { useEffect } from "react";
import * as d3 from "d3";

const primaryColor = "#F55C7A"
const lightRed = "#F56C77"

const Chart = (props) => {
  const height = 500;
  const width = 800;
  const padding = 30;

  useEffect(() => {
    const svg = d3.select("svg").attr("height", height).attr("width", width);

    const xScale = d3
      .scaleLinear()
      .domain([1, props.endYear])
      .range([padding, width - padding]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(props.data, (d) => d.savings)])
      .range([height - padding, padding]);

    const xAxis = d3.axisBottom(xScale)
    const yAxis = d3.axisLeft(yScale)

    svg
      .append("path")
      .datum(props.data)
      .attr("fill", lightRed)
      .attr("stroke", primaryColor)
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .area()
          .x((d) => xScale(d.year))
          .y0(yScale(0))
          .y1((d) => yScale(d.savings))
      );

      svg
      .append("path")
      .datum(props.data)
      .attr("fill", '#f68c70')
      .attr("stroke", '#F69C6D')
      .attr("stroke-width", 3)
      .attr(
        "d",
        d3
          .area()
          .x((d) => xScale(d.year))
          .y0(yScale(0))
          .y1((d) => yScale(d.cash))
      );

    svg
      .selectAll()
      .data(props.data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xScale(d.year))
      .attr("cy", (d) => yScale(d.savings))
      .attr("r", 5)
      .attr("stroke", "#121212")
      .attr("fill", primaryColor);

    svg.append('line')
        .attr('stroke', '#FFF')
        .attr('stroke-width', 3)
        .attr('stroke-dasharray', '3 3')
        .attr('x1', padding)
        .attr('x2', xScale(d3.max(props.data, d => d.year)))
        .attr('y1', yScale(props.number))
        .attr('y2', yScale(props.number))

    svg.append('circle')
        .attr('fill', '#FFF')
        .attr('stroke', '#121212')
        .attr('cx', xScale(props.endYear - 10))
        .attr('cy', yScale(props.number))
        .attr('r', 7)
    

    svg.append('g')
    .call(xAxis)
    .attr('stroke', '#FFF')
    .attr('color', '#FFF')
    .attr('transform', 'translate(0,' + (height - padding) + ')')

    svg.append('g')
    .call(yAxis)
    .attr('stroke', '#FFF')
    .attr('color', '#FFF')
    .attr('transform', 'translate(' + padding + ',0)')

    return function () {
      document.getElementById("chart").innerHTML = "";
    };
  }, [props.data, props.endYear, props.number, props.age]);

  return (
    <div>
      <svg id="chart"></svg>
    </div>
  );
};

export default Chart;
