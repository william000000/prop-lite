let queries = [

    {
        create:`INSERT INTO users (email, first_name, last_name, password, phoneNumber, address) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
        isExist:`SELECT * FROM users where email = $1`,
        login: `SELECT * FROM users WHERE email = $1`,// when he logs in return data associated with the email
        isAdmin: `SELECT * FROM users WHERE isAdmin = true`
    },
    {
        create: `INSERT INTO properties (owner, price, state, city, address,type,image) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
        update: `UPDATE properties SET price = $2, state = $3 , city = $4, address = $5 ,type = $6 image = $7 WHERE id = $1`,
        markSold: `UPDATE properties SET status = $1 WHERE id = $1`,
        undoMarkSold: `UPDATE properties SET status = $1 WHERE id = $1`,
        delete:`DELETE FROM properties WHERE id = $1`,
        getAll: `SELECT * FROM properties`,
        getType: `SELECT * FROM properties WHERE type = $1`,
        getOne: `SELECT * FROM properties WHERE id = $1`,
        isOwner: `SELECT * FROM properties WHERE owner = $1`
    }

]
export default queries;