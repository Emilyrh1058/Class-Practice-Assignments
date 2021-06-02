const name = 'Kim';

function person() {
  const name = 'Lee';

  // Return a function called `displayName()` with access to the `name` variable
  function displayName() {
    return name;
  }
  return displayName
}

// const display = person();
// display();

// Invoke `displayName()` in order to print "Lee" in the console
// below is calling the function "displayName" INSIDE the function "person"
console.log(person()());


// ONLY DISPLAY "Lee"