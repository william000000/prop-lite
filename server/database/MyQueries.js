let users = {
    create:`INSERT INTO users (email, first_name, last_name, password, phoneNumber, address) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`,
    isExist:`SELECT * FROM users where email = $1`,
    login: `SELECT * FROM users WHERE email = $1`,// when he logs in return data associated with the email
};
export default users;