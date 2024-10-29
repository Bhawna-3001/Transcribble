import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        default: "user",
    },
    subscription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    },
],
},{
    timestamps: true,
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

// export const User = mongoose.model("User", schema);
export const User = mongoose.model("User", userSchema);
// module.exports = User;