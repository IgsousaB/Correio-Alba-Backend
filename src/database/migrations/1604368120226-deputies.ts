import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class deputies1604368120226 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'deputies',
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
          {
            name: 'affiliation',
            type: 'string',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('deputies');
  }
}
