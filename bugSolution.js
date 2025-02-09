```javascript
// Solution 1: Using $exists operator
db.collection.find({ field: { $exists: true } });

// Solution 2: Handling empty array case
const query = [];
if (myArray.length > 0) {
  query.push({ field: { $in: myArray } });
}
query.push({ field: { $exists: true }})
db.collection.find({ $or: query });
```