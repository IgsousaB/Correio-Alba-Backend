import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class parties1604368139331 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'parties',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'string',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('parties');
  }
}
