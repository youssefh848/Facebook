import { Sequelize } from "sequelize";

//data base connection
export const sequelize = new Sequelize('bje1vkoxr2yt9q1rtcjt', 'u6i8fxv1zec067tq', 'sQPiK2obCwJJaHISAiNf', {
    host: 'bje1vkoxr2yt9q1rtcjt-mysql.services.clever-cloud.com',
    dialect: 'mysql'
  });

const db_connection = async() => {
    try {
        await sequelize.sync({ alter: true });
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
 

export default db_connection