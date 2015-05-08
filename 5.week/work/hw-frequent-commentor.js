// least commentor = Cody Strouth and he commented 68 times.

db.posts.aggregate([
    {$group:
      {
        _id: "$comments",
      },
    },
    {$unwind: "$_id"},
    {$group:
      {
        _id: "$_id.author",
        count: {$sum:1},
      },
    },
    {$sort: {count: -1}},
    {$limit: 1}
])

