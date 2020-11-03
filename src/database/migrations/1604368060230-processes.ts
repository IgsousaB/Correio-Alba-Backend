import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class processes1604368060230 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'processes',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          {
            name: 'process_number',
            type: 'integer',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'deputy_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'contractor',
            columnNames: ['deputy_id'],
            referencedTableName: 'deputies',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('processes');
  }
}
