/* eslint-disable @typescript-eslint/no-require-imports */

import mongoose, { Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

const AutoIncrement = require('mongoose-sequence')(mongoose);

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'moderator'; 
  userId: number;
}

const UserSchema = new Schema({
    name: { type: String, required: true },
    userId:Number,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['user', 'admin', 'moderator'],
        default: 'user',
    },
},{
    timestamps:true
});

UserSchema.plugin(AutoIncrement, { inc_field: 'id' });

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next(); // Nếu password không thay đổi thì bỏ qua

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = models.User || model<IUser>('User', UserSchema);

