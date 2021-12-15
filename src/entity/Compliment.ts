import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'

import { v4 as newId } from 'uuid'
import { Tag } from './Tag'
import { User } from './User'

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  readonly id: string

  @Column()
  user_sender: string

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User

  @Column()
  user_receiver: string

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  userReceiver: User

  @Column()
  tag_id: string

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag

  @Column()
  message: string

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

export { Compliment }
