// Connect to the MongoDB server and select the appropriate database
var db = connect('localhost:27017/VichaarShala');

// Specify the collection you want to watch
var collection = db.users;

// Function to watch the collection
function watchCollection() {
  var cursor = collection.find(); // Get the initial cursor

  while (true) {
    if (cursor.hasNext()) {
      var doc = cursor.next(); // Get the next document
      printjson(doc); // Display the document
    } else {
      sleep(1000); // Sleep for 1 second before checking again
      cursor = collection.find(); // Get a new cursor
    }
  }
}

// Start watching the collection
watchCollection();

// run mongosh watch_table.js to run