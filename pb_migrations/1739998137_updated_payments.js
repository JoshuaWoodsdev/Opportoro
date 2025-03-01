/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_631030571")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3979010322",
    "hidden": false,
    "id": "relation3513169079",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "job_post_id",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "select1580793482",
    "maxSelect": 1,
    "name": "payment_status",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "paid",
      "pending"
    ]
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "date2333974542",
    "max": "",
    "min": "",
    "name": "payment_date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "select2254405824",
    "maxSelect": 1,
    "name": "duration",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "30",
      "60",
      "90"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_631030571")

  // remove field
  collection.fields.removeById("relation3513169079")

  // remove field
  collection.fields.removeById("select1580793482")

  // remove field
  collection.fields.removeById("date2333974542")

  // remove field
  collection.fields.removeById("select2254405824")

  return app.save(collection)
})
