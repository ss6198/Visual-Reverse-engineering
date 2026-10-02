d3.csv("lanadelrey.csv").then(function(data) {

  data.forEach(function(d) {
    d.release_year = +d.release_year;
    d.pitchfork_score = +d.pitchfork_score;
  });

  console.log(data);


  // background
  const width = window.innerWidth;
  const height = window.innerHeight;


  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .style("background-color", "black");


  // x scale
const graphEnd = width - 380;
const xScale = d3.scaleLinear()
  .domain([2012, 2023])
  .range([100, graphEnd]);


  // x axis
  const xAxis = d3.axisBottom(xScale)
    .tickFormat(d3.format("d"));

 svg.append("g")
  .attr("transform", "translate(0," + (height - 79) + ")")
  .attr("color", "grey")
  .call(xAxis);


  // y scale
  const yScale = d3.scaleLinear()
  .domain([0, 10])
  .range([height - 80, 100]);


  // pitchfork score
svg.append("text")
  .attr("x", -(height / 2))
  .attr("y", 45)
  .attr("transform", "rotate(-90)")
  .attr("text-anchor", "middle")
  .style("font-family", "cursive")
  .text("Pitchfork Score")
  .attr("fill", "white")
  .style("font-size", "20px");
  //title 
  
svg.append("text")
  .attr("x", width / 2)
  .attr("y", 50)
  .attr("text-anchor", "middle")
  .attr("fill", "white")
  .style("font-family", "cursive")
  .style("font-size", "35px")
  .text("Lana Del Rey's Pitchfork Scores");

  // vertical lines
  svg.selectAll(".pitchfork-line")
    .data(data)
    .join("line")
    .attr("class", "pitchfork-line")
    .attr("x1", function(d) {
      return xScale(d.release_year);
    })
    .attr("x2", function(d) {
      return xScale(d.release_year);
    })
    .attr("y1", function(d) {
      return yScale(d.pitchfork_score);
    })
    .attr("y2", height - 80)
    .attr("stroke", "grey");


  // circles
  svg.selectAll(".album-circle")
    .data(data)
    .join("circle")
    .attr("class", "album-circle")
    .attr("cx", function(d) {
      return xScale(d.release_year);
    })
    .attr("cy", function(d) {
      return yScale(d.pitchfork_score);
    })
    .attr("r", 10)
    .attr("fill", function(d) {

      if (d.release_year === 2012) {
        return "#607eb4";
      }

      if (d.release_year === 2014) {
        return "#262628";
      }

      if (d.release_year === 2015) {
        return "#AD231B";
      }

      if (d.release_year === 2017) {
        return "#385d64";
      }

      if (d.release_year === 2019) {
        return "#dde6a7";
      }

      if (d.release_year === 2021 && d.pitchfork_score === 7.5) {
        return "#b5b5b5";
      }

      if (d.release_year === 2021 && d.pitchfork_score === 7.7) {
        return "#5d2823";
      }

      if (d.release_year === 2023) {
        return "#484a58";
      }

    })
    .attr("opacity", 0.9);


  // tooltip
var tooltip = d3.select("#chart")
  .append("div")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .style("color", "white")
  .style("width", "250px")
  .style("line-height", "1.4")
  .style("right", "80px")
  .style("top", "450px");

//album cover
var albumImage = d3.select("#chart")
  .append("img")
  .style("position", "absolute")
  .style("visibility", "hidden")
  .style("width", "250px")
  .style("right", "80px")
  .style("top", "180px");

  // hover
  // https://d3-graph-gallery.com/graph/interactivity_tooltip.html

  d3.selectAll(".album-circle")

  .on("mouseover", (event, d) => {

    if (d.release_year === 2012) {
      tooltip
        .text("Born to Die - Pitchfork Score: 5.5 - Songs: Born to Die, Off to the Races, Blue Jeans, Video Games, Diet Mountain Dew, National Anthem, Dark Paradise, Radio, Carmen, Million Dollar Man, Summertime Sadness, This is What Makes us Girls, Without You, Lolita, Lucky Ones")
        .style("visibility", "visible");

      albumImage
        .attr("src", "borntodiealbumcover.png")
        .style("visibility", "visible");
    }


    if (d.release_year === 2014) {
      tooltip
        .text("Ultraviolence - Pitchfork Score: 7.1 - Songs: Cruel World, Ultraviolence, Shades of Cool, Brooklyn Baby, West Coast, Sad Girl, Pretty When You Cry, Money Power Glory, F***ed My Way Up to the Top, Old Money, The Other Woman, Black Beauty, Guns and Roses, Florida Kilos, Is This Happiness, Flipside")
        .style("visibility", "visible");

      albumImage
        .attr("src", "ultraviolence.png")
        .style("visibility", "visible");
    }


    if (d.release_year === 2015) {
      tooltip
        .text("Honeymoon - Pitchfork Score: 7.5 - Songs: Honeymoon, Music to Watch Boys To, Terrence Loves You, God Knows I Tried, High by the Beach, Freak, Art Deco, Burnt Norton (Interlude), Religion, Salvatore, The Blackest Day, 24, Swan Song, Don't Let Me Be Misunderstood")
        .style("visibility", "visible");

      albumImage
        .attr("src", "honeymoon.jpg")
        .style("visibility", "visible");
    }


    if (d.release_year === 2017) {
      tooltip
        .text("Lust for Life - Pitchfork Score: 7.7 - Songs: Love, Lust for Life, 13 Beaches, Cherry, White Mustang, Summer Bummer, Groupie Love, In My Feelings, Coachella - Woodstock in My Mind, God Bless America - and All the Beautiful Women in It, When the World Was at War We Kept Dancing, Beautiful People Beautiful Problems, Tomorrow Never Came, Heroin, Change, Get Free")
        .style("visibility", "visible");

      albumImage
        .attr("src", "lustforlife.jpg")
        .style("visibility", "visible");
    }


    if (d.release_year === 2019) {
      tooltip
        .text("Norman F***ing Rockwell - Pitchfork Score: 9.4 - Songs: Norman F***ing Rockwell, Mariners Apartment Complex, Venice B****, F*** It I Love You, Doin' Time, Love Song, Cinnamon Girl, How to Disappear, California, The Next Best American Record, The Greatest, Bartender, Happiness Is a Butterfly, Hope Is a Dangerous Thing for a Woman Like Me to Have - but I Have It")
        .style("visibility", "visible");

      albumImage
        .attr("src", "normanfrockwell.jpg")
        .style("visibility", "visible");
    }


    if (d.release_year === 2021 && d.pitchfork_score === 7.5) {
      tooltip
        .text("Chemtrails Over the Country Club - Pitchfork Score: 7.5 - Songs: White Dress, Chemtrails over the Country Club, Tulsa Jesus Freak, Let Me Love You like a Woman, Wild at Heart, Dark but Just a Game, Not All Who Wander Are Lost, Yosemite, Breaking Up Slowly, Dance Till We Die, For Free")
        .style("visibility", "visible");

      albumImage
        .attr("src", "chemtrailsoverthecountryclub.jpg")
        .style("visibility", "visible");
    }


    if (d.release_year === 2021 && d.pitchfork_score === 7.7) {
      tooltip
        .text("Blue Banisters - Pitchfork Score: 7.7 - Songs: Text Book, Blue Banisters, Arcadia, Interlude - The Trio, Black Bathing Suit, If You Lie Down with Me, Beautiful, Violets for Roses, Dealer, Thunder, Wildflower Wildfire, Nectar of the Gods, Living Legend, Cherry Blossom, Sweet Carolina")
        .style("visibility", "visible");

      albumImage
        .attr("src", "bluebanisters.jpg")
        .style("visibility", "visible");
    }


    if (d.release_year === 2023) {
      tooltip
        .text("Did You Know That There's a Tunnel Under Ocean Blvd - Pitchfork Score: 8.3 - Songs: The Grants, Did You Know That There's a Tunnel Under Ocean Blvd, Sweet, A&W, Judah Smith Interlude, Candy Necklace, Jon Batiste Interlude, Kintsugi, Fingertips, Paris Texas, Grandfather Please Stand on the Shoulders of My Father While He's Deep-Sea Fishing, Let the Light In, Margaret, Fishtail, Peppers, Taco Truck x VB")
        .style("visibility", "visible");

      albumImage
        .attr("src", "didyouknow.jpg")
        .style("visibility", "visible");
    }

  })

  .on("mouseout", () => {

    tooltip
      .style("visibility", "hidden");

    albumImage
      .style("visibility", "hidden");

  });

});