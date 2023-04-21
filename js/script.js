// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Ryan Duffet
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const radius = parseFloat(document.getElementById('radius').value)

  // process
  const volume = (4 / 3) * Math.PI * (radius ** 3)

  // output
  document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' units³'
}