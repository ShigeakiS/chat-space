$(function(){
  let interval = setInterval(messeageUpdate, 5000);
  function buildHTML(message){
    let imageUrl = ``
    if (message.image){
      imageUrl = `<img class="lower-message__image" src="${message.image}">`
    }
    let html = `<div class="message" message-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-meesage">
                      <p class="lower-message__content">
                        ${message.content}
                      </p>
                  </div>
                      ${imageUrl}
                </div>`
    return html;
  }

  function messeageUpdate(){
    if (location.href.match(/\/groups\/\d+\/messages/)) {
      let messageId = $(".message").last().attr('message-id');
      $.ajax({
        url: location.href,
        type:'GET',
        dataType: 'json',
        data: {id: messageId}
      })
      .done(function(data){
        let id = $('.message').data('messageId');
        let insertHTML = "";
        data.forEach(function(message){
          insertHTML += buildHTML(message);
        });
        if (insertHTML !== "") {
          let message = $('.messages')
          message.append(insertHTML);
          message.animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        }
      })
      .fail(function() {
        alert("error");
        clearInterval(interval);
      })
    }
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      let message = $('.messages')
      message.append(html)
      message.animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $("#new_message")[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.form__submit').prop('disabled', false);
    })
  });
});
