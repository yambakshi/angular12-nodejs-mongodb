# Project Name - Server

## Technologies

This project was generated with:
- Typescript 4.3.5
- NodeJS 12.14.1
- NPM 6.13.4
- MongoDB 4.4.12
- MongoDB NPM (NodeJS Driver) 4.2.2 ([MongoDB Compatibility](https://www.mongodb.com/docs/drivers/node/current/compatibility/))

## MongoDB
- Run `MongoDB` shell
   ```
   mongo
   ```
-  Initial login URI
   ```
   mongodb://127.0.0.1:27017
   ```

-  Create DB
   ```
   use <project_name>
   ```

- Create collection
   ```
   db.createCollection("data")
   ```

- Create 'dbAdmin' user
   ```
   db.createUser({ user: "yambakshi", pwd: "1234", roles: [{ role: "dbAdmin", db: "<project_name>" }]})
   ```

- Drop user
   ```
   db.dropUser("yambakshi")
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
cd /var/www/html/<project_name>/server
mv ~/server/* .
npm i
mkdir log tmp
sudo chmod 777 log tmp
pm2 start out/main.js --name server
tail -f log/<project_name>.log
```