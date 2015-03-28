#mongoimport -d m101 -c hw2_1 --headerline --type=csv weather_data.csv
mongoimport --type csv --headerline weather_data.csv -d weather -c data
#> use weather
#> db.data.find().count()
#> 2963
