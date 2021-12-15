import { Exclude } from 'class-transformer'
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm'

import { v4 as newId } from 'uuid'

@Entity('users')
class User {
  @PrimaryColumn()
  readonly id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  admin: boolean

  @Exclude()
  @Column()
  password: string

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

export { User }
