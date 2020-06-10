const plot = {
  $schema: "https://vega.github.io/schema/vega-lite/v4.json",
  title: {
    text: "Public transport use in European cities during COVID-19",
    subtitle: "Data source: Citymapper, citymapper.com/cmi",
  },
  width: 600,
  height: 400,
  data: { url: "assets/data/Citymapper_Mobility_Index_20200610.csv" },
  transform: [
    { fold: ["London", "Paris", "Milan", "Berlin", "Stockholm"] },
    { filter: "datum.value !== ''" },
  ],
  mark: "line",
  encoding: {
    x: { field: "Date", type: "temporal" },
    y: { field: "value", type: "quantitative", title: "Mobility index" },
    color: { field: "key", type: "nominal", title: "City" },
  },
};
vegaEmbed("#plot", plot);
