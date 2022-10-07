const originalDisorderFormat = "Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia"
const listItems = originalDisorderFormat.split("|$|");


for (const item of listItems) {
    console.log(`<li>${item}</li>`);
}