# Seed - Server

## Technologies

This project was generated with:
- Typescript 4.3.5
- NodeJS 12.14.1
- NPM 6.13.4
- MongoDB 4.4.12
- MongoDB NPM (NodeJS Driver) 4.2.2 ([MongoDB Compatibility](https://www.mongodb.com/docs/drivers/node/current/compatibility/))

## Setup
1. `cd` into the project's root folder, create `server` folder and `cd` into it
   ```
   cd <project_folder>
   mkdir server
   cd server
   ```

2. Generate `package.json`
   ```
   npm init -y
   ```

3. Create `src` and `log` folders
   ```
   mkdir src log
   ```

4. Create `.env` file for development environment
   ```
   touch .env
   ```

5. Create `tsconfig.json` and `tslint.json` files
   ```
   touch tsconfig.json tslint.json
   ```

6. Install `typescript@4.3.5` globally
   ```
   npm i typescript@4.3.5 -g
   ```

7. Create entry point file `main.ts`
   ```
   touch src/main.ts
   ```

## MongoDB
- Run `MongoDB` shell
   ```
   mongo
   ```

-  Create DB
   ```
   use seed-db
   ```

- Create collection
   ```
   db.createCollection("seed-users")
   ```

- Create 'dbAdmin' user
   ```
   db.createUser({ user: "seed-db-admin", pwd: "1234", roles: [{ role: "dbAdmin", db: "seed-db" }]})
   ```

- Drop user
   ```
   db.dropUser("seed-db-admin")
   ```

-  Initial login URI
   ```
   mongodb://127.0.0.1:27017
   ```

## Development

If `typescript` is installed globally link it to current project
```
npm link typescript
```

Then run `nodemon`
```
npm run start:dev
```

## Deployment

Run `npm run build` to build the server on local machine.  
WinSCP `out` and `package.json` into `~/server` on CentOS 7 machine.
```
cd /var/www/html/seed/server
mv ~/server/* .
npm i
mkdir log tmp
sudo chmod 777 log tmp
pm2 start out/main.js --name server
tail -f log/seed.log
```