const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// POST - Add student
router.post('/', async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).send(student);
});

// GET - All students
router.get('/', async (req, res) => {
  const students = await Student.find();
  res.send(students);
});

// GET - One student
router.get('/:id', async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.send(student);
});

// PUT - Update student
router.put('/:id', async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(student);
});

// DELETE - Remove student
router.delete('/:id', async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.send({ message: 'Student deleted' });
});

module.exports = router;
