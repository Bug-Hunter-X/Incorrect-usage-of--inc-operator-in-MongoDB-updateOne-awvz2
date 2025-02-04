# Incorrect Usage of $inc Operator in MongoDB updateOne
This repository demonstrates a common error when using the `$inc` operator in MongoDB's `updateOne` method. The issue arises from incorrectly specifying the field to increment.  The correct syntax requires quoting the field name.

## Bug
The `bug.js` file showcases the incorrect usage of the `$inc` operator, leading to an error. 

## Solution
The `bugSolution.js` file provides the correct syntax for updating a document's counter field using `$inc`.

## How to Reproduce
1. Clone this repository.
2. Run `bug.js`. You will observe an error. 
3. Run `bugSolution.js` to see the correct behavior.

This example highlights the importance of attention to detail when working with MongoDB's update operators.