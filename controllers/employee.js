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
    if (!data.firstName || !data.lastName || !data.age || !data.adress) {
      return res.status(400).json({ message: 'Все поля обязательны' });
    }
    const empLoyee = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        createdEmployee: {
          create: data,
        },
      },
    });
  } catch {}
};
module.exports = {
  all, add
};
