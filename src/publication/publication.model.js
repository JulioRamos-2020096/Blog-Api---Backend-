import { Schema, model } from "mongoose";

const publicationSchema = new Schema({
    title: {
        type: String,
        required: [true, "El título es obligatorio"],
        maxLength: [100, "El título no puede tener más de 100 caracteres"]
    },
    description: {
        type: String,
        required: [true, "La descripción es obligatoria"],
        minLength: [10, "La descripción debe tener al menos 10 caracteres"]
    },
    course: {
        type: String,
        required: [true, "El curso es obligatorio"],
        enum: ["Taller III", "Práctica Supervisada", "Tecnología III"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {
    versionKey: false,
    timestamps: true
});


publicationSchema.methods.toJSON = function () {
    const { _id, ...post } = this.toObject();
    post.uid = _id;
    return post;
};


export default model("Post", publicationSchema);

