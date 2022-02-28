import Orders from "../model/orders.js";

export const ordersGet = async (req, res, next) => {
  try {
    let dataOrders = await Orders.find()
      .populate("produkId", "_id namaProduk harga createdAt updatedAt")
      .select("_id namaPembeli quantity produkId createdAt updatedAt");
    let dataHasil = {
      JumlahData: dataOrders.length,
      dataOrders,
    };
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
    let dataOrders = await Orders.findById(id)
      .populate("produkId", "_id namaProduk harga createdAt updatedAt")
      .select("_id namaPembeli quantity produkId createdAt updatedAt");
    res.status(200).json({
      message: "dari orders GetId",
      dataOrders,
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
