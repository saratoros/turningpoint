// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "115%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 80 // move trigger to center of element
})
    .setClassToggle("#agriculture", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger2",
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "125%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 140 // move trigger to center of element
})
    .setClassToggle("#marine", "visible") // add class to reveal
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger3", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "130%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 200 // move trigger to center of element
})
    .setClassToggle("#co2", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger4", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "125%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 500 // move trigger to center of element
})
    .setClassToggle("#forest", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger5", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "140%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 650 // move trigger to center of element
})
    .setClassToggle("#mushroom", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger6", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "160%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 750 // move trigger to center of element
})
    .setClassToggle("#pelagic_fish", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger7", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "190%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1000 // move trigger to center of element
})
    .setClassToggle("#plastic", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger8", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "170%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1400 // move trigger to center of element
})
    .setClassToggle("#fresh_water_fish", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger9", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "169%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1750  // move trigger to center of element
})
    .setClassToggle("#flowering_plants", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger10", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "145%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 1950 // move trigger to center of element
})
    .setClassToggle("#population", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

// build scene
new ScrollMagic.Scene({
    triggerElement: "#trigger11", //modify trigger number
    triggerHook: 0.9, // show, when scrolled 10% into view
    duration: "135%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 2050 // move trigger to center of element
})
    .setClassToggle("#ocean_temperature", "visible") // add class to reveal // modify reveal number
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
