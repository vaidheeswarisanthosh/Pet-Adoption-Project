const Adoption = require("../models/Adoption");

const approveAdoption = async (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Only admins can approve adoptions." });
  }

  const adoption = await Adoption.findById(req.params.id);
  if (!adoption) return res.status(404).json({ message: "Adoption not found." });

  adoption.status = "approved";
  await adoption.save();
  res.json({ message: "Adoption approved successfully." });
};

module.exports = { approveAdoption };
