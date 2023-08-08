const { prisma } = require('../prisma/prisma-client');

const all = async (req, res) => {
  try {
    const employees = await prisma.empLoyee.findMany();
    res.status(200).json(employees);
  } catch (e) {
    res.status(400).json({ message: 'Не удалось получить сотрудков  ' });
  }
};

const add = async (req, res) => {
  try {
    const data = req.body;
    if (!data.firstName || !data.lastName || !data.age || !data.address) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }

    const empLoyee = await prisma.empLoyee.create({
      data: {
        ...data,
        userId: req.user.id,
      },
    });

    return res.status(201).json(empLoyee);
  } catch {}
};

const remove = async (req, res) => {
  const { id } = req.body;
  try {
    await prisma.empLoyee.delete({
      where: {
        id,
      },
    });
    res.status(204).json('OK');
  } catch {
    res.status(500).json({ message: 'Не удалось найти сотрудника' });
  }
};

const edit = async (req, res) => {
  const data = req.body;
  const id = data.id;

  try {
    await prisma.empLoyee.update({
      where: {
        id,
      },
      data,
    });
    res.status(204).json('OK');
  } catch {
    res.status(500).json({ message: 'Не удалось редактировать сотрудника' });
  }
};

const employee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await prisma.empLoyee.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json(employee);
  } catch {
    res.status(500).json({ message: 'Не удалось получить сотрудника' });
  }
};

module.exports = {
  all,
  add,
  remove,
  edit,
  employee,
};
