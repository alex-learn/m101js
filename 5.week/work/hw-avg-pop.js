// Please calculate the average population of cities in
// California (abbreviation CA) and New York (NY) (taken together)
// with populations over 25,000.
// Please round the answer to a whole number.
// Hint: The answer for CT and NJ (using this data set) is 38177.

db.zips.aggregate([
    {$match: {pop: {$gt: 25000}}},
    {$match: {$or: [{state: "CT"}, {state: "NJ"}]}},

    {$group:
      {
        _id: {state: "$state", city: "$city" },
          sumpop: {$sum: "$pop"},
      },
    },

    {$group:
      {
        _id: "$_id.state",
        savg: {$avg: "$sumpop"},
      },
    },
    {$group:
      {
        _id: null,
        average: {$avg: "$savg"},
      },
    },
    ])

