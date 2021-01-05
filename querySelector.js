db.tours.find({ price: { $lte: 500 }, rating: { $gte: 4.8 } });
// mongo "mongodb+srv://cluster0.qbxao.mongodb.net/natours" --username pcellich --password dzidedi