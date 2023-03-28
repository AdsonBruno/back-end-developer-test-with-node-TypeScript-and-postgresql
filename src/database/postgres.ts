import { Pool, PoolClient } from 'pg';

export const PostgresClient = {
  pool: undefined as unknown as Pool,
  client: undefined as unknown as PoolClient,

  async connect(): Promise<void> {
    const url = process.env.DATABASE_URL || 'postgresql://localhost:5432';
    const pool = new Pool({ connectionString: url });
    const client = await pool.connect();

    this.pool = pool;
    this.client = client;

    console.log('connected to postgres!');
  },
};
