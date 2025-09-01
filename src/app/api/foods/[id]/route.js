import { ObjectId } from "mongodb";
import { collectionsName, dbConnect } from "../../../../lib/dbConnect";

export async function GET(req, { params }) {
  const p = await params;
  const FoodCollections = dbConnect(collectionsName.popularFoodCollections);

  const food = await FoodCollections.findOne({
    _id: new ObjectId(p.id),
  });

  return Response.json(food);
}

export async function PATCH(req, { params }) {
  const updatedFood = await req.json();
  const p = await params;
  const filter = { _id: new ObjectId(p.id) };
  const FoodCollections = dbConnect(collectionsName.popularFoodCollections);

  const updatedRes = await FoodCollections.updateOne(
    filter,
    { $set: { ...updatedFood } },
    {
      upsert: true,
    }
  );

  return Response.json(updatedRes);
}

export async function DELETE(req, { params }) {
  const p = await params;
  const filter = { _id: new ObjectId(p.id) };
  const FoodCollections = dbConnect(collectionsName.popularFoodCollections);

  const deleteRes = await FoodCollections.deleteOne(filter);

  return Response.json(deleteRes);
}
