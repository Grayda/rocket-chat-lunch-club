class Script {
    prepare_outgoing_request({
        request
    }) {
        let match;
        let lunch = [{
                "name": "Thai",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "Indian",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "Pizza",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "Chinese",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "Fish & Chips",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "Italian",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "McDonald's",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            },
            {
                "name": "KFC",
                "url": "http://example.com",
                "image": "http://placehold.it/350x150",
                "description": "Click here to view the menu for %name"
            }
        ]

        let reasons = [
            "I've selected a random restaurant, and the result is %name",
            "How does %name sound for lunch, %username?"
        ]

        // Prevent the request and return a new message
        match = request.data.text.match(/^(:green_apple:|:apple:|:pear:|:tangerine:|:lemon:|:banana:|:watermelon:|:grapes:|:strawberry:|:melon:|:cherries:|:peach:|:pineapple:|:tomato:|:eggplant:|:hot_pepper:|:corn:|:sweet_potato:|:honey_pot:|:bread:|:cheese:|:poultry_leg:|:meat_on_bone:|:fried_shrimp:|:cooking:|:hamburger:|:fries:|:hotdog:|:pizza:|:spaghetti:|:taco:|:burrito:|:ramen:|:stew:|:fish_cake:|:sushi:|:bento:|:curry:|:rice_ball:|:rice:|:rice_cracker:|:oden:|:dango:|:shaved_ice:|:ice_cream:|:icecream:|:cake:|:birthday:|:custard:|:candy:|:lollipop:|:chocolate_bar:|:popcorn:|:doughnut:|:cookie:|:beer:|:beers:|:wine_glass:|:cocktail:|:tropical_drink:|:champagne:|:sake:|:tea:|:coffee:|:baby_bottle:|:fork_and_knife:|:fork_knife_plate:|:croissant:|:avocado:|:cucumber:|:bacon:|:potato:|:carrot:|:french_bread:|:salad:|:shallow_pan_of_food:|:stuffed_flatbread:|:champagne_glass:|:tumbler_glass:|:spoon:|:egg:|:milk:|:peanuts:|:kiwi:|:pancakes:)/);
        if (match) {

            lunch = _.shuffle(lunch)[0]
            reasons = _.shuffle(reasons)[0]
            return {
                message: {
                    text: reasons.replace(/\%username/, request.data.user_name).replace(/\%name/, lunch.name),
                    attachments: [{
                        title: lunch.name,
                        title_link: lunch.url,
                        image_url: lunch.image,
                        text: lunch.description.replace(/\%username/, request.data.user_name).replace(/\%name/, lunch.name)
                    }]
                }
            };
        }
    }


}
