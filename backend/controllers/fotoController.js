import asyncHandler from "express-async-handler";
import Fotos from "../models/fotoModel.js";

// @desc    Fetch all the photos
// @route   GET /api/events
// @access  Public
const getFotos = asyncHandler(async (req, res) => {
  const fotos = await Fotos.find();

  res.json({ fotos });
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getFotoById = asyncHandler(async (req, res) => {
  const foto = await Fotos.findById(req.params.id);

  if (foto) {
    res.json(foto);
  } else {
    res.status(404);
    throw new Error("Foto not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
const deleteFoto = asyncHandler(async (req, res) => {
  const foto = await Fotos.findById(req.params.id);

  if (foto) {
    await foto.remove();
    res.json({ message: "Photo removed" });
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
const createFoto = asyncHandler(async (req, res) => {
  const foto = new Fotos({
    title: "Sample name",
    day: "20",
    month: "JUN",
    year: "22",
    address: "Social Club",
    user: req.user._id,
    image: "/images/sample.jpg",
    link: "google.com",
  });

  const createdFoto = await foto.save();
  res.status(201).json(createdFoto);
});

// @desc    Update a product
// @route   PUT /api/products/:id
// @access  Private/Admin
const updateFoto = asyncHandler(async (req, res) => {
  const { title, day, month, year, address, link, image } = req.body;
  const foto = await Fotos.findById(req.params.id);

  if (foto) {
    foto.title = title;
    foto.day = day;
    foto.month = month;
    foto.year = year;
    foto.image = image;
    foto.address = address;
    foto.link = link;

    const updatedFoto = await foto.save();
    res.json(updatedFoto);
  } else {
    res.status(404);
    throw new Error("Photo not found");
  }
});

export { getFotos, deleteFoto, createFoto, updateFoto, getFotoById };
