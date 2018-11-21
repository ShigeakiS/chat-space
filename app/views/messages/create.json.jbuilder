json.content  @message.content
json.user_id  @message.user.id
json.name  @message.user.name
json.date   @message.created_at.strftime('%Y/%m/%d %H:%M:%S')
json.image  @message.image.url
