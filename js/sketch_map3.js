let data;

//based on excellent tutorial by Jacob Rivkin at https://www.youtube.com/watch?v=jCmh_eXwPH0

function preload() {

    data = loadTable("js/data/worldcities.csv", "csv", "header");
    console.log(data);
}

function setup() {
    let cnv = createCanvas(1040, 650);
    cnv.parent('sketch-holder_5');
//la couleur en blanc, et 0 pour les mettre en noir
background(255);

    let numRows = data.getRowCount();
    print(numRows);

    //import info from excel file
    let lng = data.getColumn("lng");
    let lat = data.getColumn("lat");
    let pop = data.getColumn("emission");

    //define the max and min 
    let maxLng = max(lng);
    let minLng = min(lng);

    let maxLat = max(lat);
    let minLat = min(lat);

    let minPop = min(pop);
    let maxPop = max(pop);

    for (let i = 0; i <= numRows; i++) {

        // use the map function to rescale the latitude and longtitude
        let mapLng = map(lng[i], minLng, maxLng, 0, width);
        let mapLat = map(lat[i], minLat, maxLat, height, 0);
        //premiere chiffre pour les points noirs de la carte du monde et la deuxieme chiffre pour le cercle d emisison
        let fillColor = map(pop[i], minPop, maxPop, 0.5, 200);
        //cercle d emisison: 0,0 pour rouge; 250,0 pour vert; 0,250 pour violet
        fill(fillColor, 100, 250);
        //pour dessiner la carte du monde- 0,0:en noir
        strokeWeight(1.2);
        //ellipse a une fonction de "print"??
        ellipse(mapLng, mapLat, fillColor);
    }
}

