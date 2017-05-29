//1 
db.students.find({
    scores: {
        $elemMatch: {
            score: {
                $gt: 87,
                $lt: 93
            }
        }
    }
}).pretty()

//2
db.students.aggregate(
[{
    $unwind: "$scores"
}, {
    $match: {
		'scores.score': {
            $gt: 90
        },
        'scores.type': {
            $in: ["exam"]
        }
        
    }
}]).pretty()

//3
db.students.update({
    name: "Dusti Lemmond"
}, {
    $set: {
        accepted: true
    }
}, {
    multi: true
})