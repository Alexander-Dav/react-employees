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
    /* const empLoyee = await prisma.user.update({
      where: {
        id: req.user.id,
      },
      data: {
        createdEmployee: {
          create: data,
        },
      },
    });*/
    const empLoyee = await prisma.empLoyee.create({
      data: {
        ...data,
        userId,
      },
    });

    return res.status(201).json(empLoyee);
  } catch {}
};
module.exports = {
  all,
  add,
};
