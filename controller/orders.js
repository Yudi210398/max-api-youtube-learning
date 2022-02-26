import Orders from "../model/orders.js";

export const ordersGet = async (req, res, next) => {
  try {
    let dataOrders = await Orders.find()
      .populate("produkId")
      .select("_id namaPembeli quantity produkId createdAt updatedAt");
    console.log(dataOrders);
    let dataHasil = {
      JumlahData: dataOrders.length,
      dataOrders,
    };
    console.log(dataHasil);
    if (dataHasil.dataOrders.length > 0)
      return res.status(200).json({
        message: "dari orders get",
        dataHasil,
      });
    else res.status(200).json({ message: "Data Kosong", dataHasil });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

export const ordersPost = async (req, res, next) => {
  try {
    let dataOrders = await new Orders({
      namaPembeli: req.body.namaPembeli,
      quantity: req.body.quantity,
      produkId: req.body.produkId,
    }).save();
    res.status(201).json({
      message: "dari orders POST",
      dataOrders,
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

export const ordersGetId = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    res.status(200).json({
      message: "dari orders GetId",
      id,
    });
  } catch (err) {
    if (!err.statusCode) err.statusCode = 500;
    next(err);
  }
};

export const ordersDeleteId = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    let data = await Orders.remove({ _id: id });
    if (data.deletedCount === 0)
      return res.status(404).json({
        message: "Data Produt tidak ditemukan",
      });
    res.status(200).json({
      message: "Berhasil Hapus Data dari produks delete",
      data,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const ordersPatchId = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    res.status(200).json({
      message: "dari orders Patch Id",
      id,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};
