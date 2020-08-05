d3.json("assets/data/uk-upper-tier-local-authorities.hexjson").then(
  (hexjson) => {
    // Set the size and margins of the svg
    const margin = { top: 10, right: 10, bottom: 10, left: 10 },
      width = 300 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

    // Create the svg element
    const svg = d3
      .select("#plot")
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Render the hexes
    const hexes = d3.renderHexJSON(hexjson, width, height);

    // Bind the hexes to g elements of the svg and position them
    const hexmap = svg
      .selectAll("g")
      .data(hexes)
      .enter()
      .append("g")
      .attr("transform", (d) => "translate(" + d.x + "," + d.y + ")");

    // Draw the polygons around each hex's centre
    hexmap
      .append("polygon")
      .attr("points", (d) => d.points)
      .attr("stroke", "white")
      .attr("stroke-width", "2")
      .attr("fill", (d) => (d.n.includes("shire") ? "orange" : "green"))
      .append("svg:title")
      .text((d) => d.n);

    svg
      .append("text")
      .attr("x", 0)
      .attr("y", 0)
      .attr("font-family", "sans-serif")
      .attr("font-size", "24px")
      .attr("alignment-baseline", "hanging")
      .text("Shires");
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", height - 20)
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("alignment-baseline", "hanging")
      .text("Upper Tier Local Authorities containing 'shire' (orange)");
    svg
      .append("text")
      .attr("x", 0)
      .attr("y", height - 2)
      .attr("font-family", "sans-serif")
      .attr("font-size", "12px")
      .attr("alignment-baseline", "hanging")
      .text("Data source: ODI Leeds. Graphic: Tom White");
  }
);
