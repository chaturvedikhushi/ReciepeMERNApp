import express from "express"; //framework to create an api
import cors from 'cors'; //define rules to communicate btw frontend and backend
import mongoose from 'mongoose';
import {userRouter} from './routes/users.js'
import { recipeRouter } from "./routes/recipes.js";

const app=express();

app.use(express.json());  //when we collect data from frontend it convert into json format
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);
//for connection
mongoose.connect("mongodb+srv://Muskan:Muskan20@recipe.oryr32t.mongodb.net/recipe?retryWrites=true&w=majority",
{
useNewUrlParser:true,
useUnifiedTopology: true,
}
);
app.listen(3001, ()=>console.log("Server started"))