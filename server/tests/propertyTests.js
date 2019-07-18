import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('before each', () => {
  beforeEach((done) => {
    done();
  });
});

describe('Property Tests', () => {

  it('Should not be able to create new property when price is empty', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: '',
      state: 'kbh',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when price is invalid', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: '100s',
      state: 'kbh',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when price has whitespaces', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: '   ',
      state: 'kbh',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when state is empty', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: '',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when state contains whitespace', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: '   ',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when state is invalid', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl2',
      city: 'nyanaxa',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when city is empty', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: '',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when city has whitespaces', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: '   ',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to create new property when city has whitespaces', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: '   ',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when city is invalid', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when city is invalid', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'rqwrfds',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when address is invalid', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'rqwrfds1',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when address is empty', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: '',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when address has whitespace', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: '   ',
      type: 'house',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type has whitespace', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: '   ',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type is not apartment', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type is not apartment', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type is not house', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type is not office', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary',
      image: 'https://res.cloudinary.com/prolite/image/upload/v1562855584/bit0gxxhljfupnnfjfrk.png'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to create new property when type is not land', (done) => {
    chai.request(app).post('/api/v1/property').send({
      price: 100,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });
  it('Should not be able to flag a property when reason is empty', (done) => {
    chai.request(app).post('/api/v1/property/report/1').send({
      reason: '',
      description: 'too much'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to flag a property when reason has whitespaces', (done) => {
    chai.request(app).post('/api/v1/property/report/1').send({
      reason: '    ',
      description: 'too much'
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to flag a property when description has whitespaces', (done) => {
    chai.request(app).post('/api/v1/property/report/1').send({
      reason: 'pricing',
      description: '    '
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });

  });
  it('Should not be able to flag a property when description is empty', (done) => {
    chai.request(app).post('/api/v1/property/report/1').send({
      reason: 'pricing',
      description: ''
    })
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });


  it('Should update data when user provide valid data', (done) => {
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app).patch('/api/v1/property/1').send({
      price: 1000,
      state: 'kglhh',
      city: 'gasabh',
      address: 'daudbaub',
      type: 'house'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(200);
        done();
      });
  });
  it('Should not update data when user provide no price', (done) => {
    let TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG53aWNrMTExMEBnbWFpbC5jb20iLCJpYXQiOjE1NjM0ODE5ODB9.tQFPChCNUgXXujvyWHCzN7P1kPdLKQ5nl0MzV--n3cM`;
    chai.request(app).patch('/api/v1/property/1').send({
      price:'' ,
      state: 'kgl',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it('Should not update data when no state provided', (done) => {
    let TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG53aWNrMTExMEBnbWFpbC5jb20iLCJpYXQiOjE1NjM0ODE5ODB9.tQFPChCNUgXXujvyWHCzN7P1kPdLKQ5nl0MzV--n3cM`;
    chai.request(app).patch('/api/v1/property/1').send({
      price: 5000,
      state: '',
      city: 'gasab1',
      address: 'daudbaub',
      type: 'diary'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it('Should not update data when no city provided', (done) => {
    let TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG53aWNrMTExMEBnbWFpbC5jb20iLCJpYXQiOjE1NjM0ODE5ODB9.tQFPChCNUgXXujvyWHCzN7P1kPdLKQ5nl0MzV--n3cM`;
    chai.request(app).patch('/api/v1/property/1').send({
      price: 5000,
      state: 'khd',
      city: '',
      address: 'daudbaub',
      type: 'diary'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it('Should not update data when user provide invalid city data', (done) => {
    let TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG53aWNrMTExMEBnbWFpbC5jb20iLCJpYXQiOjE1NjM0ODE5ODB9.tQFPChCNUgXXujvyWHCzN7P1kPdLKQ5nl0MzV--n3cM`;
    chai.request(app).patch('/api/v1/property/1').send({
      price: 5000,
      state: 'kks',
      city: 'gasab1',
      address: 'jdjdjd',
      type: 'house'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it('Should not update data when no address', (done) => {
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app).patch('/api/v1/property/1').send({
      price: 5000,
      state: 'hhhd',
      city: 'gasab1',
      address: '',
      type: 'house'
    })
      .set("x-token", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it('Should not update data when user provide valid type', (done) => {
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app).patch('/api/v1/property/1').send({
      price: 5000,
      state: 'hhhd',
      city: 'gasab1',
      address: 'daudbaub',
      type: ''
    })
      .set("id", TOKEN)
      .end((err, res) => {
        res.should.has.status(400);
        done();
      });
  });

  it("Should not delete non-existing property", (done) => {
    let id = -1;
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app)
      .delete(`/api/v1/properties/${id}`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(404);
        done();
      });
  });

  it("Should get all property", (done) => {
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app)
      .get(`/api/v1/property`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(200);
        done();
      });
  });

  it("Should get specific property when property exist", (done) => {
    const id = 2;
    chai.request(app)
      .get(`/api/v1/property/${id}`)
      .end((req, res) => {
        res.should.have.a.status(200);
        done();
      });
  });

  it("Should not get specific property when property not exist", (done) => {
    const id = -1;
    chai.request(app)
      .get(`/api/v1/property/${id}`)
      .end((req, res) => {
        res.should.have.a.status(404);
        done();
      });
  });
  it("Should not delete when invalid token and no id not found", (done) => {
    const id = 1828;
    const TOKEN =''
    chai.request(app)
      .get(`/api/v1/property/${id}`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(404);
        done();
      });
  });
  it("Should mark as sold when existing property", (done) => {
    let id = 1;
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app)
      .patch(`/api/v1/property/${id}/sold`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(200);
        done();
      });
  });

   it("Should not mark as sold when not  existing property", (done) => {
    let id = -1;
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app)
      .patch(`/api/v1/property/${id}/sold`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(404);
        done();
      });
  });

  it("Should not mark as sold when invalid token", (done) => {
    let id = 1;
    const TOKEN = "dhde34";
    chai.request(app)
      .patch(`/api/v1/property/${id}/sold`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(400);
        done();
      });
  });


  it("Should delete existing property", (done) => {
    let id = 1;
    let TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU2MzQ4MzkwN30.utqXJQx5Xv5DNMP4moIjtkgkIwBb_BGY69hZYBPS70Q';

    chai.request(app)
      .delete(`/api/v1/property/${id}`)
      .set("x-token", TOKEN)
      .end((req, res) => {
        res.should.have.a.status(200);
        done();
      });
  });

});
