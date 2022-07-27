import axios from 'axios';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

describe('Reproduction of issue #1327', () => {
  let server;

  beforeAll(() => {
    server = setupServer(
      rest.post('/form/data', (req, res, ctx) => {
        try {
          return res(ctx.json(req.body.get('myField')));
        } catch (e) {
          return res(ctx.text(e.stack));
        }
      }),
    );
  });

  beforeEach(() => {
    server.listen();
  });

  afterEach(() => {
    server.close();
  });

  it('should allow accessing a FormData body in a request handler', async () => {
    const body = new FormData();

    body.append('myField', 'myValue');

    const response = await axios.post('/form/data', body);

    expect(response.data).toBe('myValue');
  });
});
