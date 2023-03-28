module.exports = {
  devServer: {
    proxy: {
      "/api/employee": {
        target: "http://localhost:5000/api",
        changeOrigin: true,
      },
    },
  },
};
