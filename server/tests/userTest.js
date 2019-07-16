import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app";

chai.use(chaiHttp);
chai.should();

describe("before each", () => {
    beforeEach((done) => {
        done();
    })
})


describe("Authentication tests", () => {

    it("Should be able to login", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "john.doe@gmail",
            password: "anger"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to login when email is invalid", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "john.doegmail",
            password: "anger"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to login when email is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "",
            password: "sfgfgsfsf"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to login when password is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "john.doe@gmail.com",
            password: ""
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to login when password length is < 5", (done) => {
        chai.request(app).post("/api/v1/auth/signin").send({
            email: "john.doe@gmail.com",
            password: "a"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when email is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "",
            password: "anger"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when first name is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when first name length is less or equal to 1", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "j",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when first name has whitespaces", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "   ",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    
    it("Should not be able to signup when first name is invalid", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John1",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    
    it("Should not be able to signup when last name is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    
    it("Should not be able to signup when last name is invalid", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe@",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when last name has whitespaces", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "   ",
            password: "anger",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to signup when password is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when password length is less than 5", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "",
            password: "a",
            phoneNumber: "0781289231",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when phoneNumber is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when phoneNumber is invalid", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781289231s",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when phoneNumber length is less than 10", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "07812",
            address: "huye",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when address length is less than 2", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781268924",
            address: "h",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when address is empty", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781268924",
            address: "",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when address has whitespaces", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781268924",
            address: "   "
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });
    it("Should not be able to signup when address has whitespaces", (done) => {
        chai.request(app).post("/api/v1/auth/signup").send({
            email: "john.doe@gmail.com",
            first_name: "John",
            last_name: "Doe",
            password: "anger",
            phoneNumber: "0781268924",
            address: "   "
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
        });
    });

})