json.content  @message.content
json.user_id  @message.user.id
json.name  @message.user.name
json.date   @message.created_at.to_s(:db)
json.image  @message.image.url
