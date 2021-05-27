let data;

//based on excellent tutorial by Jacob Rivkin at https://www.youtube.com/watch?v=jCmh_eXwPH0

function preload() {

    data = loadTable("js/data/worldcities.csv", "csv", "header");
    console.log(data);
}

function setup() {
    let cnv = createCanvas(800, 500);
    cnv.parent('sketch-holder_5');

background(0);

    let numRows = data.getRowCount();
    print(numRows);

    //1. Use the
    let lng = data.getColumn("lng");
    let lat = data.getColumn("lat");
    let city = data.getColumn("city");
    let pop = data.getColumn("emission");

    let maxLng = max(lng);
    let minLng = min(lng);
    print(minLng, maxLng);

    let maxLat = max(lat);
    let minLat = min(lat);
    print(minLat, maxLat);
    let minPop = min(pop);
    let maxPop = max(pop);
    print(minPop, maxPop);

    for (let i = 0; i <= numRows; i++) {

        // use the map function to rescale the latitude and longtitude
        let mapLng = map(lng[i], minLng, maxLng, 0, width);
        let mapLat = map(lat[i], minLat, maxLat, height, 0);

        //fill color based on population
        let fillColor = map(pop[i], minPop, maxPop, 0, 225);
        fill(fillColor, 10, 250);
        print(fillColor);
        //draw lots of littler colors
        stroke(fillColor, 120, 300);
        strokeWeight(1.25);
        ellipse(mapLng, mapLat, fillColor/5);


    }
}
function draw() {
    noFill();
    rectMode(CENTER);
   rect(600, 140, 50, 50);  
}
