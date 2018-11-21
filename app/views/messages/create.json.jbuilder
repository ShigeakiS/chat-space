json.content  @message.content
json.user_id  @message.user.id
json.name  @message.user.name
json.date   @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.image  @message.image.url
