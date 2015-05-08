///
 // What is the class_id which has the highest average student performance?
 //
 // You need to group twice to solve this problem.
 // You must figure out the GPA that each student has achieved in a class
 // then average those numbers to get a class average. After that, you just need to sort.
 //
 // The class with the lowest average is the class with class_id=2. Those students achieved a class average of 37.6
 ///
db.grades.aggregate([
    {$unwind: "$scores"},
    {$match: {$or: [{"scores.type": "homework"}, {"scores.type": "exam"}]}},
    {$group: {_id: {class_id: "$class_id", student_id: "$student_id"}, student_avg: {$avg: "$scores.score" }}},
    {$group: {_id: "$_id.class_id", class_avg: {$avg: "$student_avg"}}},
    {$sort: {"class_avg": -1}},
    {$limit: 1},
])

