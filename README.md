
## Database設計

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|index: true|
|image|string|index: true|
|user_id|refarences|null: false, foreign_key: true|
|group_id|refarences|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|text|null: false, index: true, unipue: true|
|password|string|null: false|

### Association
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|

### Association
- has_many :messages
- has_many :users_groups
- has_many :users, through: :users_groups

## users_groupsテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|refarences|null: false, foreign_key: true|
|group_id|refarences|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group


