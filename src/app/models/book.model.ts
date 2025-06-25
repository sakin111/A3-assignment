import { model, Schema } from "mongoose";
import { IBook } from "../interfaces/book.interfaces";


const bookSchema = new Schema<IBook>({
    title :{type:String, required : true},
    author:{type: String, required : true},
    genre: {type: String, enum:['FICTION', 'NON_FICTION', 'SCIENCE', 'HISTORY', 'BIOGRAPHY', 'FANTASY'], required: true},
    isbn: { type: String, required: true, unique: true },
    description: String,
    copies: { type: Number, required: true, min: 0 },
    available: { type: Boolean, default: true },
   
},
{timestamps: true})

export const Books = model<IBook>('Books', bookSchema);