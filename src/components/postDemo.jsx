import React, { useState } from "react";
import useProductHook from "../hooks/useProductHook";

const PostDemo = () => {
    const { createPost } = useProductHook();

    const [productTitle, setProductTitle] = useState("");
    const [productDescription, setProductDescription] = useState("");

    const handleCreateProduct = (e) => {
        e.preventDefault();

        const data = {
            title: productTitle,
            description: productDescription,
        };

        createPost(data);

        // Clear the input fields after creating a post
        setProductTitle("");
        setProductDescription("");
    };

    return (
        <div>
            <h1>Post Data</h1>
            <form onSubmit={handleCreateProduct}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter title"
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        placeholder="Enter description"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />
                </div>
                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default PostDemo;
