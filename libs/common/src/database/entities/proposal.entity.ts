import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Proposal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  comment: string;

  @Column()
  createdAt: string;

  @Column()
  occupation: string;

  @Column()
  twitterURI: string;

  @Column()
  websiteURI: string;

  @Column()
  partnershipId: string;

  @Column()
  partnerAddress: string;

  @Column()
  signature: string;

  @Column()
  ipfsURI: string;
}
