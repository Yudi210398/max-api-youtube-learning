export const tryApiGet = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "dari produks get",
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const tryApiPost = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "dari produks post",
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const produkId = async (req, res, next) => {
  try {
    const paramsId = req.params.produkId;
    if (paramsId === `masneno`)
      res.status(200).json({
        message: "berhasil dapat id spesial",
        paramsId,
      });
    else
      res.status(200).json({
        message: "berhasil dapat id",
      });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const produkPatch = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "dari produks Patch",
    });
  } catch (err) {
    console.log(`error`, err);
  }
};

export const produkDelete = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "dari produks delete",
    });
  } catch (err) {
    console.log(`error`, err);
  }
};
