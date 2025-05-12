'use strict';

import Post from './publication.model.js';


export const savePost = async (req, res) => {
    try {
        const data = req.body;

        if (!data.title || !data.description || !data.course) {
            return res.status(400).json({
                success: false,
                message: 'Faltan campos obligatorios'
            });
        }

        const newPost = new Post(data);
        await newPost.save();

        res.status(200).json({
            success: true,
            message: 'Publicación creada correctamente',
            post: newPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al guardar la publicación',
            error
        });
    }
};


export const getPosts = async (req, res) => {
    const { limite = 10, desde = 0 } = req.query;

    try {
        const posts = await Post.find()
            .sort({ createdAt: -1 }) 
            .skip(Number(desde))
            .limit(Number(limite));

        const total = await Post.countDocuments();

        res.status(200).json({
            success: true,
            total,
            posts
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener las publicaciones',
            error
        });
    }
};


export const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            post
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al buscar la publicación',
            error
        });
    }
};


export const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findByIdAndDelete(id);

        if (!post) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Publicación eliminada correctamente'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la publicación',
            error
        });
    }
};
