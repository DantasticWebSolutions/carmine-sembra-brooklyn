import asyncHandler from "express-async-handler";
import Event from "../models/eventModel.js";

// @desc    Fetch all events
// @route   GET /api/events
// @access  Public
const getEvents = asyncHandler(async (req, res) => {
  const events = await Event.find();

  res.json({ events });
});

// @desc    Fetch single Event
// @route   GET /api/products/:id
// @access  Public
const getEventById = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    res.json(event);
  } else {
    res.status(404);
    throw new Error("Event not found");
  }
});

// @desc    Delete a Event
// @route   DELETE /api/events/:id
// @access  Private/Admin
const deleteEvent = asyncHandler(async (req, res) => {
  const event = await Event.findById(req.params.id);

  if (event) {
    await event.remove();
    res.json({ message: "Photo removed" });
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

// @desc    Create a Event
// @route   POST /api/events
// @access  Private/Admin
const createEvent = asyncHandler(async (req, res) => {
  const event = new Event({
    title: "Esempio Event",
    day: "20",
    month: "JUN",
    address: "Social Club",
    user: req.user._id,
    image: "/images/sample.jpg",
  });

  const createdEvent = await event.save();
  res.status(201).json(createdEvent);
});

// @desc    Update a Event
// @route   PUT /api/event/:id
// @access  Private/Admin
const updateEvent = asyncHandler(async (req, res) => {
  const { title, day, month, address, image } = req.body;
  const event = await Event.findById(req.params.id);

  if (event) {
    event.title = title;
    event.day = day;
    event.month = month;
    event.image = image;
    event.address = address;

    const updatedEvent = await event.save();
    res.json(updatedEvent);
  } else {
    res.status(404);
    throw new Error("Event not found");
  }
});

export { getEvents, deleteEvent, createEvent, updateEvent, getEventById };
