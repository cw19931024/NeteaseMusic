module.exports = {
  devServer: {
    port: 1103
  },
  transpileDependencies: [/\bvue-awesome\b/],
  filenameHashing: false //去掉打包后文件名的哈希值
};
