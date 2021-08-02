const dao = require('../dao/db_operations');
const supertest = require('supertest');
const app = require('../app').app;
const request = supertest(app);
// const findAll = jest.fn();


describe('Employees APIs', () =>{
it('It should Fetch all the Active Employees', async () =>{
    const res =await request.get('/api/v1.0/employees');
    expect(res.statusCode).toEqual(200);
});


it('it should give us information of Employee with respect to', async () =>{
await request.get('/api/v1.0/employees/2')
             .expect(200)
             .expect(res.body)
             .toMatchObject(
                 {
                    employeeData: {
                        id: 2,
                        employee_name: "Raman",
                        gender: "male",
                        address_1: "House Number 123",
                        address_2: "House Number 123",
                        city: "Fzr",
                        state: "Punjab",
                        country: 2,
                        is_active: true,
                        
                    }
                 }
             )
          
});

it('it should Create new Employee', async () =>{
    await request.post('/api/v1.0/employees')
                 .expect(201)
                 .field('employee_name', 'donald trump')
                 .field('gender', 'male')
                 .field('address_1', 'House Number 123')
                 .field('address_2', 'House Number 1234')
                 .field('city', 'Fzr')
                 .field('state', 'Punjab')
                 .field('country', '1')
                 .field('is_active', true)
          expect(res.statusCode).toEqual(201);
          expect(res.body).toHaveProperty('result');
                 
                
            });
              

});