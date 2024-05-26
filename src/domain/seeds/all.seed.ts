import mongoose from "mongoose";
import { mongoConnect } from "../repositories/mongo-repository";
import { IUser, User } from "../entities/user-entity";
import { Cart } from "../entities/cart-entity";
import { Category, CategoryA, ICategory } from "../entities/category-entity";
import { Cake, ICake } from "../entities/cake-entity";

async function populateBBDD() {
  try {
    await mongoConnect();
    console.log("Tenemos conexión");

    // BORRADO DE DATOS
    await Cart.collection.drop();
    await User.collection.drop();
    await Cake.collection.drop();
    await Category.collection.drop();

    // USERS
    const userList: IUser[] = [
      { email: "pavire@gmail.com", password: "12345678" },
      { email: "juansa@gmail.com", password: "53252432" },
    ];

    const userDocuments = userList.map((user) => new User(user));
    for (let i = 0; i < userDocuments.length; i++) {
      const user = userDocuments[i];
      await user.save();
    }

    // Categories
    const categoriesList: ICategory[] = [{ name: "Favoritos de Fran" }, { name: "Clásicas" }, { name: "Realfooder" }, { name: "Sin gluten y lactosa" }, { name: "Cítricos" }, { name: "Fruta" }, { name: "Celebración" }, { name: "Americanas" }];
    const categoriesDocuments: CategoryA[] = categoriesList.map((categorie) => new Category(categorie));
    // CAKES
    const cakeList: ICake[] = [
      { title: "Tarta de manzana con velas", description: "Tarta de manzana con velas para cumpleaños", price: 25, allergens: ["GLUTEN", "LACTEOS"], categories: [categoriesDocuments[5]._id, categoriesDocuments[6]._id], logoImage: "prueba.jpg" },
      { title: "Tarta de chololate", description: "Tarta de chocolate con galleta", price: 45, allergens: ["GLUTEN", "LACTEOS"], categories: [categoriesDocuments[0]._id, categoriesDocuments[1]._id, categoriesDocuments[2]._id], logoImage: "prueba.jpg" },
      { title: "Tarta de la abuela", description: "Tarta de la abuela con los ingredientes de toda la vida", price: 25, allergens: ["GLUTEN", "LACTEOS", "HUEVOS"], categories: [categoriesDocuments[1]._id], logoImage: "prueba.jpg" },
      { title: "Tarta Super Oreo", description: "Tarta oreo con chocolate blanco", price: 25, allergens: ["GLUTEN", "LACTEOS"], categories: [categoriesDocuments[0]._id], logoImage: "prueba.jpg" },
    ];
    const cakeDocuments = cakeList.map((cake) => new Cake(cake));

    // INSERTS
    await Category.insertMany(categoriesDocuments);
    await Cake.insertMany(cakeDocuments);
    console.log("Datos guardados correctamente!");
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
}

void populateBBDD();
