const cron = require("node-cron");
const task = () => {
  console.log("Running a scheduled task at ", Date.now());
};
cron.schedule("* * * * * *", task);
