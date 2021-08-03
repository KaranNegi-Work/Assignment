const supertest = require('supertest');
const app = require('../app').app;
const request = supertest(app);
// const findAll = jest.fn();


describe('Employees APIs', () => {
 
    //GET API Test
    it('It should Fetch all the Active Employees', async () => {
        request.get('/api/v1.0/employees')
            .expect(200)
            .expect('Content-Type', /json/);
    });

    //GET API Test
    it('it should give us information of Employee with respect to ID', async () => {
        request.get('/api/v1.0/employees/2')
            .expect(200)
            .expect('Content-Type', /json/);

        //  .then(response => {
        //      {
        //         employeeData: {
        //             id: 2,
        //             employee_name: "Raman",
        //             gender: "male",
        //             address_1: "House Number 123",
        //             address_2: "House Number 123",
        //             city: "Fzr",
        //             state: "Punjab",
        //             country: 2,
        //             is_active: true,

        //         }
        //      }
        //     }) .catch(err => done(err))

    });

    //POST API Test
    it('it should Create new Employee', async () => {
        await request.post('/api/v1.0/employees')
            .expect(201)
            .send({
                employee_name: "donald trump",
                gender: "male",
                address_1: "House Number 123",
                address_2: "House Number 1234",
                city: "Fzr",
                state: "Punjab",
                country: 2,
                is_active: true,

            })
            .expect('Content-Type', /json/);

    });

    //PUT API Test
    it('it should Update new Employee', async () => {
        await request.put('/api/v1.0/employees/1')
            .expect(200)
            .send({
                employee_name: "Rohit",
                gender: "male",
                address_1: "House Number 2525",
                address_2: "House Number 3232",
                city: "mohali",
                state: "Punjab",
                country: 2,
                is_active: true,

            })
        //.expect('Content-Type', /json/);

    });

    //DELETE API Test
    it('it should delete the employee', async () => {
        await request.delete('/api/v1.0/employees/1')
            .expect(200)
    });

     //GET API Test
     //non existing ID of Employee
     it('it should throw an error that employee is not present with this specific ID (GET)', async () => {
        request.get('/api/v1.0/employees/2')
            .expect(404)
            .expect('Content-Type', /json/);

    });

    //DELETE API Test
    //non existing id of Employee
    it('it should throw an error that employee is not present with this specific ID (DELETE)', async () => {
        await request.delete('/api/v1.0/employees/50')
            .expect(404)
    });

    //POST API Test
    //Validation check test case 
    it('it should throw code 422 for Validation error', async () => {
        await request.post('/api/v1.0/employees')
            .expect(422)
            .send({
                employee_name: "donald trump",
                gender: "Male",
                address_1: "House Number 123",
                address_2: "House Number 1234",
                city: "Fzr",
                state: "Punjab",
                country: 2,
                is_active: true,

            })
            .expect('Content-Type', /json/);

    });

    //PUT API test
    //when we send invalid country code while updating 
    it('it should throw an error(404) while Updating Employee(country ID not found)', async () => {
        await request.put('/api/v1.0/employees/1')
            .expect(404)
            .send({
                employee_name: "thomas",
                gender: "male",
                address_1: "House Number 2525",
                address_2: "House Number 3232",
                city: "moga",
                state: "Punjab",
                country: 10,
                is_active: true,

            })
        //.expect('Content-Type', /json/);

    });


});


    //  .field('employee_name', 'donald trump')
    //  .field('gender', 'male')
    //  .field('address_1', 'House Number 123')
    //  .field('address_2', 'House Number 1234')
    //  .field('city', 'Fzr')
    //  .field('state', 'Punjab')
    //  .field('country', '1')
    //  .field('is_active', true)