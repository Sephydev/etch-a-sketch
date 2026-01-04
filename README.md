# Etch a Sketch

This project is part of the The Odin Project curriculum.
It consist of using what we learned during the Javascript sections of the Foundation module to make a mix of a sketchpad and an Etch a Sketch.

A [Live Demo](https://sephydev.github.io/etch-a-sketch/) is available.

## What was the most easy part ?

The most easy part was creating the grid with JavaScript, and adding the hover effect. It consist of playing with `for` loop to create the grid, and play with `square.className` with an `addEventListener()` to add the `hover` class when the user hover a square.

## What was the hardest part ?

The hardest part was to enable the user to change size of the grid : the difficulty was on the fact that each square must adapt their size compared to the `container` div. To resolve this, I took the `offsetWidth` of `.container`, removed the `gap` between the squares, then divided the rest by the `size` entered by the user.