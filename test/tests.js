// IMPORT MODULES under test here:
import { createCountString } from '../utils.js';

const test = QUnit.test;

test('test if createCountString successfully returns the string with 3 given variables.', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected1 = 'You have changed the village 3 times. You have changed the castle 2 times. You have changed the water feature 1 time.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = createCountString(3, 2, 1);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1, 'should return: "You have changed the village 3 times. You have changed the castle 2 times. You have changed the water feature 1 time."');

    //Arrange
    // Set up your arguments and expectations
    const expected2 = 'You have changed the village 5 times. You have changed the castle 6 times. You have changed the water feature 7 times.';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual2 = createCountString(5, 6, 7);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual2, expected2, 'should return: "You have changed the village 5 times. You have changed the castle 6 times. You have changed the water feature 7 times."');
});
