'use strict'
const seconds = 3600 * +prompt('Enter number of hours: ');
if (isNaN(seconds)){
    alert('Error! You did not enter a number!')
} else {
    alert(`There are ${seconds}`)
}