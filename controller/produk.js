import Produk from "../model/produk.js";

export const tryApiGet = async (req, res, next) => {
  try {
    let data = await Produk.find();

    if (data.length > 0)
      res.status(200).json({
        message: "Berhasil dapat Produk",
        data,
      });
    else res.status(200).json({ message: "Data Kosong", data });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const tryApiPost = async (req, res, next) => {
  try {
    const produk = await new Produk({
      namaProduk: req.body.namaProduk,
      harga: req.body.harga,
    }).save();
    res.status(201).json({
      message: "dari produks post",
      buatProduk: produk,
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const produkId = async (req, res, next) => {
  try {
    const paramsId = req.params.produkId;
    let produk = await Produk.findById(paramsId);
    console.log(produk, `data`);
    if (!produk) {
      console.log(`gagal`);
      const error = new Error("ID Invalid");
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json({
      message: "Berhasil dapat Produk",
      produk,
    });
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

export const produkPatch = async (req, res, next) => {
  try {
    const id = req.params.produkId;
    const namaProduk = req.body.namaProduk;
    const harga = req.body.harga;

    let updateData = await Produk.findById(id);
    if (!updateData) {
      const error = new Error("Tidak Menemukan Data.");
      error.statusCode = 404;
      throw error;
    }
    updateData.namaProduk = namaProduk;
    updateData.harga = harga;
    await updateData.save();
    res.status(200).json({
      message: "dari produks Patch",
      updateData,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const produkDelete = async (req, res, next) => {
  try {
    const produkId = req.params.produkId;
    let data = await Produk.remove({ _id: produkId });
    res.status(200).json({
      message: "dari produks delete",
      data,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};
