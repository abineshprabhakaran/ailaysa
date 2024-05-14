module.exports = (sequelize, Sequelize) => {
    const city = sequelize.define("city", {
      name: {
        type: Sequelize.STRING
      },
      countryId:{
        type:Sequelize.INTEGER
      }
    });
  
    return city;
  };