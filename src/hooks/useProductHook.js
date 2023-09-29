import { useState, useEffect } from "react";

const useProductHook = () => {
    const [productData, setProductData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await fetch("http://localhost:8000/books/all");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const data = await response.json();
            console.log("Data: ", data);
            setProductData(data.data.books);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    };

    const createPost = (formData) => {
        setLoading(true);
        fetch("http://localhost:8000/books/add", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("Successfully created", data);
                fetchData(); // Refresh data after creating
            })
            .catch((error) => {
                console.error("Error creating post:", error);
            })
            .finally(() => setLoading(false));
    };

    const updatePost = (postId, formData) => {
        setLoading(true);
        fetch(`http://localhost:8000/books/update/${productId}`, {
            method: "PUT", // Use PUT for updates
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log("Successfully updated", data);
                fetchData(); // Refresh data after updating
            })
            .catch((error) => {
                console.error("Error updating post:", error);
            })
            .finally(() => setLoading(false));
    };

    const deletePost = (productId) => {
        setLoading(true);
        fetch(`http://localhost:8000/books/delete/${productId}`, {
            method: "DELETE",
        })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error("Delete request failed");
                }
                return resp.json();
            })
            .then((data) => {
                console.log("Successfully deleted", data);
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            })
            .finally(() => setLoading(false));
    };


    return { productData, loading, setLoading, createPost, updatePost, deletePost };
};

export default useProductHook;
