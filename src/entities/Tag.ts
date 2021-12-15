import { Expose } from 'class-transformer'
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { v4 as newId } from 'uuid'

@Entity('tags')
class Tag {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @CreateDateColumn()
  created_At: Date

  @UpdateDateColumn()
  updated_At: Date

  constructor() {
    if (!this.id) {
      this.id = newId()
    }
  }
}

export { Tag }
