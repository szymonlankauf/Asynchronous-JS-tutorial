
/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 709, 432, 970]);
    }, 1500)
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout((ID) => {
            const recipe = {title: 'Fresh tomatoe pasta', publisher: 'Simon'};
            resolve(`Recipe: ${ID}: ${recipe.title}.`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout((pub) => {
            const recipe = {title: 'Italian Pizza', publisher: 'Simon'};
            resolve(`${pub}: ${recipe.title}.`)
        }, 1500, publisher)
    })
}

getIDs
.then(IDs => {
    console.log(IDs);
    return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Simon');
})
.then(publisher => {
    console.log(publisher);
})
.catch(err => {
    console.log(err);
})

async function getRecipeAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Simon');
    console.log(related);

    return recipe;
};

getRecipeAW().then(result => console.log(`${result} is the best ever!`));

*/

// https://cors-anywhere.herokuapp.com
// http://crossorigin.me
// https://corsproxy.github.io

function getWeather(woeid) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`).then(result => {
        console.log(result);
        return result.json();
    }).then(data => {
        const today = data.consolidated_weather[0];
        console.log(`Temperature on ${today.applicable_date} in the city of: ${data.title} is between: ${today.min_temp} and ${today.max_temp}.`)
    })
    .catch(error => console.log(error))
}

//getWeather('2487956');
//getWeather('44418');

//=============================================================
// same function using async/await

async function getWeatherAW(woeid) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        const today = await data.consolidated_weather[0];
        console.log(`Temperature on ${today.applicable_date} in the city of: ${data.title} is between: ${today.min_temp} and ${today.max_temp}.`);
    } catch(error) {console.log(error)}
    
};

getWeatherAW('2487956');
let dataLondon;
getWeatherAW('44418').then(result => {
    dataLondon = result;
    console.log(dataLondon);
});