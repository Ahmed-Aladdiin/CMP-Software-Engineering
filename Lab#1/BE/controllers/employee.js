const employee = [
  { id: "1", name: "Mohamed Sayed" },
];

exports.getEmployees = async (req, res, next) => {
  res.status(200).json({ data: employee });
};

// TODO
exports.deleteEmployee = async (req, res, next) => {
  const { id } = req.params;

  const indx = employee.findIndex((e) => e.id === id);
  if (indx >= 0) {
    employee.splice(indx, 1);
  }

  res.status(204).send();
};

// TODO
exports.createEmployee = async (req, res, next) => {
  const { name, id } = req.body;
  employee.push({ id: id, name: name });
  res.status(201);
};
