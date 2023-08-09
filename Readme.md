# Express & Sequelize Typescript Boilerplate

Simple customizable boilerplate for Express & Sequelize with Typescript.

## Project Setup

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Database Configuration**
   If you are not using postgres, remove `pg` and `pg-hstore` from dependencies and install the one you need:

   ```bash
   npm install --save mysql2
   npm install --save mariadb
   npm install --save sqlite3
   npm install --save tedious
   npm install --save oracledb
   ```

3. **Create a .env File**
   You need to set up the following environment variables:

   ```
   PORT
   // If connecting with database URL
   DB_URL
   // If connecting with database options
   DB_HOST
   DB_NAME
   DB_USER
   DB_PASS
   ```

4. **Install Any Additional Desired Dependencies**
   If there are any additional dependencies that you want, install them and set them up as needed.

5. **Running the Project**
   - For development, run:
     ```bash
     npm run dev
     ```
   - For deployment, run:
     ```bash
     npm run build
     npm run start
     ```
