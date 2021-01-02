db.tours.find({ price: { $lte: 500 }, rating: { $gte: 4.8 } });
