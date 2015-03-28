db.hw2_1.find({"Wind Direction": {$gte: 180, $lte: 360}}, {"State": 1, "Temperature": 1, "Wind Direction": 1, "_id": 0}).sort({Temperature: 1}).limit(1)
