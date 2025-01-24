const Event = require("../models/event.model");

const createEvent = async (event) => {
  try {
    const { event_name, event_URL, badge, reviewers, application } = event;

    const newEvent = await Event.create({
      event_name,
      event_URL,
      badge,
      reviewers,
      application,
    });

    console.log(`Event ${newEvent.event_name} created successfully`);
  } catch (error) {
    console.error(error);
  }
};

// Get all Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get event by ID
const getEventById = async (req, res) => {
  const { id } = req.params;
  try {
    const event = await Event.findByPk(id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
};
