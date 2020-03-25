const p1 = {
    $schema: "https://vega.github.io/schema/vega-lite/v4.json",
    title: "COVID-19 UK daily tests with weekly rolling average",
    description: "UK daily tests",
    width: 600,
    height: 400,
    data: { url: "assets/data/covid-19-indicators-uk.csv" },
    transform: [
      {
        filter: "datum.Country == 'UK' && datum.Indicator == 'Tests'"
      },
      {
        window: [{ op: "lag", field: "Value", as: "Prev" }]
      },
      {
        calculate: "if(datum.Prev == null, NaN, datum.Value - datum.Prev)",
        as: "DailyTests"
      },
      {
        frame: [-4, 3],
        window: [
          {
            field: "DailyTests",
            op: "mean",
            as: "RollingDailyTests"
          }
        ]
      }
    ],
    layer: [
      {
        mark: {
          type: "bar",
          tooltip: true
        },
        encoding: {
          x: { field: "Date", type: "temporal" },
          y: {
            title: "Daily tests",
            field: "DailyTests",
            type: "quantitative"
          }
        }
      },
      {
        mark: {
          type: "line",
          stroke: "orange",
          strokeOpacity: 0.5
        },
        encoding: {
          x: { field: "Date", type: "temporal" },
          y: { field: "RollingDailyTests", type: "quantitative" }
        }
      }
    ]
  };
  vegaEmbed("#p1", p1);