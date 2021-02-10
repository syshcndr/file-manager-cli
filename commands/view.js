const viewer = (dirName, mode) => {
  if (mode == "tree") {
    console.log(`organize was called for this`, dirName);
  } else if (mode == "flat") {
    console.log(`flat was called for this`, dirName);
  } else {
    console.log(`wrong mode type help for commands`);
  }
};

module.exports = {
  viewer: viewer,
};
