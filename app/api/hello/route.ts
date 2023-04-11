import { Client } from 'pg';

export async function GET(request: Request) {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'notes_app_nextjs13',
    user: 'postgres',
    password: 'password',
  });
  client.connect((err) => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected');
    }
  });
  return new Response('Hello, Next.js!');
}
