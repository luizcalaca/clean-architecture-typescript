import { PersonModel } from '@/domain/models/person';
import { model, Schema } from "mongoose";

const schema = new Schema<PersonModel>({
    id:  { type: String },
    username: { type: String, required: true },
    email:  { type: String, required: true }
});

export const PersonModelSchema = model<PersonModel>('persons', schema);
