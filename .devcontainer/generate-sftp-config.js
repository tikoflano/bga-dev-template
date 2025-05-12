const fs = require("fs");

const config = {
  name: `BGA - ${process.env.BGA_PROJECT_NAME || ""}`,
  host: "1.studio.boardgamearena.com",
  protocol: "sftp",
  port: 2022,
  username: process.env.BGA_USERNAME || "",
  privateKeyPath: process.env.BGA_PRIVATE_KEY_PATH || "",
  remotePath: `/${process.env.BGA_PROJECT_NAME || ""}`,
  useTempFile: false,
  openSsh: false,
  uploadOnSave: true,
  ignore: [
    ".vscode",
    ".devcontainer",
    "node_moduless",
    ".git",
    ".DS_Store",
    "_ide_helper.php",
  ],
  syncOption: {
    skipCreate: false,
    delete: true,
  },
  watcher: {
    files: "img/*",
    autoUpload: true,
    autoDelete: true,
  },
};

fs.writeFileSync(".vscode/sftp.json", JSON.stringify(config, null, 2));
