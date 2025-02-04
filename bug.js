```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6526977380961234567890")},{$inc:{counter: 1}});
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("6526977380961234567890")},{$inc:{"counter": 1}});
```