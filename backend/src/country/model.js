module.exports = (sequelize, Sequelize) => {
    const country = sequelize.define("country", {
      name: {
        type: Sequelize.STRING
      },
    });
  
    return country;
  };