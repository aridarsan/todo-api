import mongoose from 'mongoose';

export const readTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createTodos = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    res.status(201).json(todo);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
};
