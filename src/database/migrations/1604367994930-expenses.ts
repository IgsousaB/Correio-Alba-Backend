import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class expenses1604367994930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'expenses',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'note_number',
            type: 'integer',
            isNullable: false,
          },
          {
            name: 'value',
            type: 'money',
            isNullable: false,
          },
          {
            name: 'category',
            type: 'string',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('expense');
  }
}
