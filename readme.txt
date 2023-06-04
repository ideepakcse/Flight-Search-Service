#BASIC SEQUELIZE COMMANDS:-

sequelize db:create            ---->>>>>     Create database specified by configuration
npx sequelize model:generate --name Airplane --attributes modelNumber:string,capacity:integer
npx sequelize db:migrate       ---->>>>>>      Run pending migrations
sequelize db:migrate:undo       ---->>>>>>            Reverts a migration