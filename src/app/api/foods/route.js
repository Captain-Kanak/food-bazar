import { collectionsName, dbConnect } from "../../../lib/dbConnect";

export async function GET() {
  try {
    const FoodCollections = dbConnect(collectionsName.popularFoodCollections);
    const foods = await FoodCollections.find().toArray();

    console.log(foods);

    // Convert ObjectId to string so it's valid JSON
    const cleanData = foods.map((item) => ({
      ...item,
      _id: item._id.toString(),
    }));

    console.log(cleanData);

    return Response.json(cleanData, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const foods = await req.json();
    const FoodCollections = dbConnect(collectionsName.popularFoodCollections);
    const result = await FoodCollections.insertOne(foods);

    // revalidatePath("/products");

    return Response.json(
      {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      },
      { status: 201 }
    );
  } catch (error) {
    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
