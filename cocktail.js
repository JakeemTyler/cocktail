/** @format */

cocktail = [
    {
      name: "Brown Sugar Old Fashioned",
      ingredients: "Brown Sugar, Water, Angostura Bitters, Bourbon, Ice, Orange Peel, Cinnamon Stick",
      recipe: " Add sugar, water, and bitters to glass. Muddle until sugar is dissolved. Add bourbon and ice and stir to combine. Garnish with an orange peel and cinnamon stick.",
      calories: "100 calories",
    },
    {
        name: "Negroni",
        ingredients: "Gin, Campari, Sweet Vermouth, Orange Peel",
        recipe: "Stir gin, vermouth, and Campari in an ice-filled mixing glass until very cold, about 30 seconds. Strain cocktail through a Hawthorne strainer or a slotted spoon into an ice-filled rocks glass",
        calories: "100 calories",
      },
      {
        name: "Classic Manhattan",
        ingredients: "Bourbon, Vermouth, Ice, Maraschino Cherry, Bitters",
        recipe: "Add the rye whiskey, sweet vermouth, and bitters into a mixing glass with ice and stir until well-chilled. Strain into a chilled Nick & Nora or coupe glass.",
        calories: "100 calories",
      },
      {
        name: "Perfect Cosmopolitan",
        ingredients: "Citrus Vodka, Cointreau, Cranberry Juice, Lime Wedge, Ice, Cranberries",
        recipe: "Add vodka, Cointreau, cranberry juice, and lime juice to a cocktail shaker and fill with ice. Shake until well chilled. Strain drink into a martini glasses and garnish with a lime wedge and cranberries.",
        calories: "100 calories",
      },
      {
        name: "Moscow Mule",
        ingredients: "Vodka, Ginger Beer, Lime Juice, ",
        recipe: "Pour vodka and lime juice into a mug; add ice cubes and ginger beer. Stir to combine. Drop a lime wedge into the mug for garnish.",
        calories: "100 calories",
      },
];

  const establishFeedTimes = (index) => {
    console.log(cocktail[index].ingredients);
    // $(".care").eq(index).text(animals[index].feed_times);
    $(".answer").eq(index).text(cocktail[index].name + " : " + cocktail[index].ingredients )
  };
  
  const showInformation = () => {
    // Display the feed times for each dog
    // using the JSON data, with function establishFeedTimes
    jQuery.each($(".box"), establishFeedTimes );
    
  
    // Add an event handler for when the element of
    // class box gets a click event,anonymous function here
    $(".box").on("click", function () {
      // Find the box clicked using the index method
      let indexOfDrink = $(".box").index(this);
  
      // Find the paragraph of class p and set the text
      $(this).find("p.answer").text(cocktail[indexOfDrink].calories);
    });
  
    // Add an event handler for when the element
    // of class box gets a mouseover event
    $(".box").on("mouseover", function () {
      let indexOfDrink = $(".box").index(this);
  
      $(this)
        .find("p.answer")
        .text(
          cocktail[indexOfDrink].name + ": " + cocktail[indexOfDrink].recipe 
        );
    });
  
    // Add an event handler for when the
    // element of class box gets a mouseout event
    $(".box").on("mouseout", function () {
      let indexOfDrink = $(".box").index(this);
  
      $(this).find("p.answer").text(cocktail[indexOfDrink].name + " : " + cocktail[indexOfDrink].ingredients);
    });
  };
  
  $(document).ready(showInformation);