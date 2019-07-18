let queries = [

    {
        create:`INSERT INTO users (email, first_name, last_name, password, phoneNumber, address) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
        isExist:`SELECT * FROM users where email = $1`,
        login: `SELECT * FROM users WHERE email = $1`,// when he logs in return data associated with the email
        isAdmin: `SELECT * FROM users WHERE isAdmin = true`
    },
    {
        create: `INSERT INTO properties (owner, price, state, city, address,type,image) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *`,
        update: `UPDATE properties SET price = $1, state = $2 , city = $3, address = $4 ,type = $5 WHERE id = $6 RETURNING *`,
        markSold: `UPDATE properties SET status = 'sold' WHERE id = $1 RETURNING *`,
        undoMarkSold: `UPDATE properties SET status = 'available' WHERE id = $1 RETURNING *`,
        delete:`DELETE FROM properties WHERE id = $1`,
        getAll: `SELECT p.*, u.email,u.phonenumber from properties p, users u where p.id = u.id and p.owner = u.email`,
        getType: `SELECT * FROM properties WHERE type = $1`,
        getOne: `SELECT * FROM properties WHERE id = $1`,
        isOwner: `SELECT * FROM properties WHERE owner = $1`
    }

]
export default queries;