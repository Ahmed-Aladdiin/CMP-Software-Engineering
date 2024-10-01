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

  if (!id || !name) {
    return res.status(400).json({message: "Missing parameters"});
  }

  const indx = employee.findIndex((e) => e.id === id);
  if (indx >= 0) {
    return res.status(400).json({message: "Id already exist"});
  }

  employee.push({ id: id, name: name });
  res.status(201).json({message: "Created Successfully"});
};
