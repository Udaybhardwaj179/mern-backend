const cron = require("node-cron");
const invoice = require("./data/invoice.json");
const fs = require("fs");
const path = require("path");
const task = () => {
  const paidInvoice = invoice.filter((item) => {
    return item.status === "paid";
  });
  if (paidInvoice.length > 0) {
    paidInvoice.forEach((item) => {
      invoice.splice(
        invoice.findIndex((e) => {
          return e.status === item.status;
        }),
        1
      );
    });
  }

  console.log(invoice);
  fs.writeFileSync(
    path.join(__dirname, "./","data","invoice.json"),
    JSON.stringify(invoice)
  )
   fs.writeFileSync(
    path.join(__dirname, "./","data","archive.json"),
    JSON.stringify(paidInvoice)
  )
};

cron.schedule("*/20 * * * * *",task)
