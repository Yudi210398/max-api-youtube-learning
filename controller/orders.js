export const ordersGet = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "dari orders get",
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const ordersPost = async (req, res, next) => {
  try {
    const order = {
      produkId: req.body.produkId,
      quantity: req.body.quantity,
    };

    res.status(201).json({
      message: "dari orders POST",
      order,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const ordersGetId = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    console.log(id);
    res.status(200).json({
      message: "dari orders GetId",
      id,
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const ordersDeleteId = async (req, res, next) => {
  try {
    const id = req.params.orderId;
    res.status(200).json({
      message: "dari orders Delete Id",
      id,
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
