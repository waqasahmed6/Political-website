import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";

const newsCommentsModel = sequelize.define("newsComents",{
    comments:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
export default newsCommentsModel