import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe("before each", () => {
    beforeEach((done) => {
        done();
    })
});

describe ('Property Tests', ()=>{
    
    it("Should not be able to create new property when price is empty", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: "",
            state: "kbh",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when price is invalid", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: "100s",
            state: "kbh",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when price has whitespaces", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: "   ",
            state: "kbh",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when state is empty", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"       
         })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when state contains whitespace", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "   ",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when state is invalid", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl2",
            city: "nyanaxa",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when city is empty", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when city has whitespaces", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "   ",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to create new property when city has whitespaces", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "   ",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when city is invalid", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when city is invalid", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "rqwrfds",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when address is invalid", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "rqwrfds1",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when address is empty", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when address has whitespace", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "   ",
            type: "house",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type has whitespace", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "   ",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type is not apartment", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "diary",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type is not apartment", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "diary",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type is not house", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "diary",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type is not office", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "diary",
            image: "https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png"
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to create new property when type is not land", (done) => {
        chai.request(app).post("/api/v1/property").send({
            price: 100,
            state: "kgl",
            city: "gasab1",
            address: "daudbaub",
            type: "diary",
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });
    });
    it("Should not be able to flag a property when reason is empty", (done) => {
        chai.request(app).post("/api/v1/property/report/1").send({
            reason:'',
            description:'too much'
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to flag a property when reason has whitespaces", (done) => {
        chai.request(app).post("/api/v1/property/report/1").send({
            reason:'    ',
            description:'too much'
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to flag a property when description has whitespaces", (done) => {
        chai.request(app).post("/api/v1/property/report/1").send({
            reason:'pricing',
            description:'    '
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
    it("Should not be able to flag a property when description is empty", (done) => {
        chai.request(app).post("/api/v1/property/report/1").send({
            reason:'pricing',
            description:''
        })
            .end((err, res) => {
                res.should.has.status(400);
                done();
            });

    });
});