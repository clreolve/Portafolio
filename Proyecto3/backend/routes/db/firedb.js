const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore"); // Import the functions you need from the SDKs you need

const serviceAccount = require("../../firekey.json");

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();



async function write_detail(id, data) {
  try {
    const document = db.collection("detalles").doc("" + id);
    data = JSON.parse(data);

    if (document && document.exists) {
      console.log("documento existe");
      await document.update(data);
      return { id: id, data: data };
    } else {
      console.log("documento no existe");
      await document.set(data, { merge: true });
      return { id: id, data: data };
    }
  } catch (error) {
    return null;
  }
}

async function read_detail(id) {
  try {
    const ref = await db.collection("detalles").doc("" + id);
    const doc = await ref.get()
    const data = await doc.data()
    return data;
  } catch (error) {
    return null;
  }
}

module.exports = {
  db,
  write_detail,
  read_detail
};
