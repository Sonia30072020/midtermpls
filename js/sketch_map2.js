let data;

//based on excellent tutorial by Jacob Rivkin at https://www.youtube.com/watch?v=jCmh_eXwPH0

function preload() {

    data = loadTable("js/data/worldcities.csv", "csv", "header");
    console.log(data);
}
//la base pour dessiner le map
function setup() {
    let cnv = createCanvas(800, 500);
    cnv.parent('sketch-holder_5');
    background(0);
    //getRowCount: nombre total du lines sur excel: quon utilise dans loop"for"
    let numRows = data.getRowCount();

    let lng = data.getColumn("lng");
    let lat = data.getColumn("lat");
    let pop = data.getColumn("population");
    let emiss = data.getColumn("emission");

//definir les max et min:
    let maxLng = max(lng);
    let minLng = min(lng);

    let maxLat = max(lat);
    let minLat = min(lat);

    let minEmiss = 11023; //I replaced min(Emiss) with lowest number
    let maxEmiss = max(emiss);//fourth print: (0, 10174681100)
    
    let minPop = min(pop);
    let maxPop = max(pop);

//Use a "for loop" to take lat/long info from each row
//Also, scale Emissions in rgb color value (0 to 255); the problem is that
    for (let i = 0; i <= numRows; i++) {

        // use the map function to rescale the latitude and longtitude
        let mapLng = map(lng[i], minLng, maxLng, 0, width);
        let mapLat = map(lat[i], minLat, maxLat, height, 0);
        let mapEmiss = map(emiss[i], minEmiss, maxEmiss, 0, 500);
        print(mapEmiss);


//scale population to RGB value 0-255
let colorPop = map(pop[i], minPop, maxPop, 0, 255);

        //fill color based on population & emission
        let fillColor = (colorPop, 100, colorPop);
        fill(fillColor, fillColor, fillColor);
        print(fillColor);

        //draw lots of littler colors
        stroke(200, mapEmiss/colorPop, mapEmiss/colorPop);
        strokeWeight(0.5);
        ellipse(mapLng, mapLat, sqrt(fillColor));

                //text labels
                //textSize(3);
                //text(city[i], mapLng+5, mapLat);
                //fill(230,100,255);

    } //<--closes "for loop"
}