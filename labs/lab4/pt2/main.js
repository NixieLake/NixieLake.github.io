/*
 * Name: Sarah Poulsen
 * File: main.js
 * Date: 5 April 2024
 * For INFT 1206-02: Web Development - Fundamentals, Assignment 4, part 2 - Image gallery
 */

const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [
  'images/pic1.jpg',
  'images/pic2.jpg',
  'images/pic3.jpg',
  'images/pic4.jpg',
  'images/pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altText = {
  'images/pic1.jpg': 'Closeup of a human eye',
  'images/pic2.jpg': 'Rock that looks like a wave',
  'images/pic3.jpg': 'Purple and white pansies',
  'images/pic4.jpg': 'Section of wall from a pharoah\'s tomb',
  'images/pic5.jpg': 'Large moth on a leaf'
}

/* Looping through images */
for (image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', image);
  newImage.setAttribute('alt', altText[image]);
  thumbBar.appendChild(newImage);
}

/* Wiring up the Darken/Lighten button */
