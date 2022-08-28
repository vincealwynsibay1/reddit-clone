import { Schema, model } from "mongoose";

interface IUser {
	username: string;
	email: string;
	password: string;
}

const userSchema = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

export default model<IUser>("User", userSchema);
