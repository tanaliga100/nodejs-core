const { readFile, writeFile } = require("fs").promises;
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const path1 = "./content/first.txt";
const path2 = "./content/second.txt";

const start = async () => {
  try {
    const first = await readFile(path1, "utf8");
    const second = await readFile(path2, "utf8");
    await writeFile(
      `./content/mind-grenade.txt`,
      `THIS IS AWESOME: \n ${first} \n ${second}`,
      {
        flag: "a",
      }
    );
    console.log(`${first} \n ${second}`);
  } catch (error) {
    console.log(error);
  }
};

start();
// getText(path)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

//const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject();
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
