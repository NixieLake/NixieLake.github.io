/*
 * Name: Sarah Poulsen
 * File: main.js
 * Date: 5 April 2024
 * For INFT 1206-02: Web Development - Fundamentals, Assignment 4, part 1 - Silly story generator
 */

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so : insertx: went for a walk.When they got to: inserty:, they stared in horror for a few moments, then : insertz:.Bob saw the whole thing, but was not surprised — : insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
  "Willy the Goblin",
  "Big Daddy",
  "Father Christmas"
];

const insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
]

const insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
]

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  // Add variable for the new story.
  let newStory = storyText;

  // Select items to insert into the story.
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  // Insert each item into the story at the appropriate place.
  newStory = newStory.replace(":insertX:", xItem);
  newStory = newStory.replace(":insertY:", yItem);
  newStory = newStory.replace(":insertZ:", zItem);

  // Replace Bob with a custom name if one is entered.
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  // Convert weight and temperature values to metric if UK is selected.
  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`;
    newStory = newStory.replace("94 Fahrenheit", temperature);
    newStory = newStory.replace("300 pounds", weight);
  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
