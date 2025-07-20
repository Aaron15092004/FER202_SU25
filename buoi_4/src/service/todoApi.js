export const todoApi = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching todos:", error);
  }
};
