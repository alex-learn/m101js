// calculate the number of people who live in a zip code in the US where the city starts with a digit
//
// The project operator can extract the first digit from any field.
// For example, to extract the first digit from the city field, you could write this query:
//
// db.zips.aggregate([
//     {$project:
//      {
//   first_char: {$substr : ["$city",0,1]},
//      }
//    }
// ])
//
// You will need to change your projection to send more info through than just that first character.
// you will need a filtering step to get rid of all documents where the city does not start with a digital (0-9).
//

db.zips.aggregate([
    {$match: {city: /^\d.*$/}},
    {$sort: {city: 1}},
    {$group:
      {
        _id: null,
        pop: {$sum: "$pop"},
      },
    },
])
