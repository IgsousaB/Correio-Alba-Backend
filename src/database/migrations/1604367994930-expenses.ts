import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class expenses1604367994930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'expenses',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            unsigned: true,
            generationStrategy: 'increment',
          },
          {
            name: 'note_number',
            type: 'integer',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'value',
            type: 'money',
            precision: 2,
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'category',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'process_id',
            type: 'integer',
          },
          {
            name: 'deputy_id',
            type: 'integer',
          },
          {
            name: 'receiver_id',
            type: 'integer',
          },
        ],
        foreignKeys: [
          {
            name: 'process',
            columnNames: ['process_id'],
            referencedTableName: 'processes',
            referencedColumnNames: ['id'],
          },
          {
            name: 'contrator',
            columnNames: ['deputy_id'],
            referencedTableName: 'deputies',
            referencedColumnNames: ['id'],
          },
          {
            name: 'receiver',
            columnNames: ['receiver_id'],
            referencedTableName: 'receivers',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('expense');
  }
}
