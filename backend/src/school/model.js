module.exports = (sequelize, Sequelize) => {
    const school = sequelize.define("school", {
      name: {
        type: Sequelize.STRING
      },
      cityId:{
        type:Sequelize.INTEGER
      }
    });
  
    return school;
  };