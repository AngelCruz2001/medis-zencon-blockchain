import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import Swal from "sweetalert2";
import dayjs from "dayjs";

interface GraphProps {
  data: any; // Asegúrate de definir el tipo de datos adecuado
}

const GraphComponent: React.FC<GraphProps> = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const width = 1500;
    const height = 900;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const links = data.links.map((d: any) => ({ ...d }));
    const nodes = data.nodes.map((d: any) => ({ ...d }));

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(100)
      )
      .force("charge", d3.forceManyBody())
      .force("center", d3.forceCenter(width / 2, height / 2))
      .on("tick", ticked);

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    const link = svg
      .append("g")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke-width", (d: any) => Math.sqrt(d.value));

    const node = svg
      .append("g")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", (d: any) => color(d.group))
      .on("click", (event: any, d: any) => {
        Swal.fire({
          title: d.name,
          text:
            "Birth Day:" + " " + dayjs(d.birthDay).format("MMMM D, YYYY h:mm A"),
        });
      });

    node.append("title").text((d: any) => d.id);

    node.call(
      d3
        .drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
    );

    function ticked() {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("cx", (d: any) => d.x).attr("cy", (d: any) => d.y);
    }

    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      // Limpiar recursos cuando el componente se desmonta
      simulation.stop();
    };
  }, [data]);

  return (
    <div className="w-full h-full">
      <svg ref={svgRef}></svg>;
    </div>
  );
};

export default GraphComponent;
