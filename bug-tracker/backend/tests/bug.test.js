const request = require('supertest');
const { Bug } = require('../models/bug');
const app = require('../app');
const mongoose = require('mongoose');

// Increase timeout for all tests
jest.setTimeout(15000); // 15 seconds

//Describe - groups/harbors all the tests cases for a specific api
describe('Bug API', () => {
  beforeAll(async () => {
    // Connect to a test database
    await mongoose.connect(process.env.MONGODB_URI_TEST);
  }, 30000);

  afterEach(async () => {
    // Clear the database after each test
    await Bug.deleteMany({});
  });

  //runs after all tests are complete
  //here to prevent memory leaks or system lagging
  afterAll(async () => {
    // Disconnect from the database
    await mongoose.connection.close();
  });

  describe('GET /api/bugs', () => {

    //it defines individual tests
    it('should return all bugs', async () => {
        // Add test data
        await Bug.create([
          { title: 'Bug 1', description: 'Description 1' },
          { title: 'Bug 2', description: 'Description 2' }
        ]);
      
        const res = await request(app).get('/api/bugs');
        
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBe(2);
        
        // Check both bugs exist without assuming order
        const titles = res.body.map(bug => bug.title);
        expect(titles).toContain('Bug 1');
        expect(titles).toContain('Bug 2');
      });

    it('should return empty array when no bugs exist', async () => {
      const res = await request(app).get('/api/bugs');
      
      expect(res.statusCode).toEqual(200);
      expect(res.body).toEqual([]);
    });
  });

  describe('POST /api/bugs', () => {
    //prompts system to create bug - mimics how user would create a new bug report
    it('should create a new bug', async () => {
      const newBug = {
        title: 'Test Bug',
        description: 'Test Description',
        severity: 'high'
      };

      //awaits info from express js app itself - if success post it else show issue
      const res = await request(app)
        .post('/api/bugs')
        .send(newBug);
      
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('_id');
      expect(res.body.title).toBe(newBug.title);
      expect(res.body.description).toBe(newBug.description);
      expect(res.body.severity).toBe(newBug.severity);
      expect(res.body.status).toBe('open'); // Default status
    });

    it('should return 400 for invalid data', async () => {
        const invalidBug = { title: '' }; // Missing required fields
        
        const res = await request(app)
          .post('/api/bugs')
          .send(invalidBug);
        
        expect(res.statusCode).toEqual(400);
        // Match your actual error response structure
        expect(res.body).toHaveProperty('error');
        expect(res.body).toHaveProperty('details');
      });
  });

});