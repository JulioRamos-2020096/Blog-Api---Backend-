import Post from "../publication/publication.model.js";

export const postExists = async (id = '') => {
    const exists = await Post.findById(id);
    if (!exists) {
        throw new Error(`No existe una publicación con el ID: ${id}`);
    }
};
