export const postFn = async () => {
    const response = await fetch("https://dummyjson.com/posts");
    if (!response.ok) return "Network issues";

    return await response.json();
    // javascript object notation
};