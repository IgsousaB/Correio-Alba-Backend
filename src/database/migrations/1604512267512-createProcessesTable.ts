import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class createProcessesTable1604512267512
  implements MigrationInterface {
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
            name: 'deputy_id',
            type: 'integer',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
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
