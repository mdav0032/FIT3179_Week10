var arrivals_vg = "./json_files/1_arrivals_by_country.vg.json"; 
vegaEmbed("#arrivals_map", arrivals_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);

var money_vg = "./json_files/2_receipts_vs_expenditure_by_country.vg.json"; 
vegaEmbed("#money_bar", money_vg).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);