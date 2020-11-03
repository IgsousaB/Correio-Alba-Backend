import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class receivers1604368002182 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'receivers',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'main_activity',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'situation',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'adress',
            type: 'text',
            isNullable: false,
          },
          {
            name: 'CPF/CNPJ',
            type: 'numeric',
            isNullable: false,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('receivers');
  }
}
