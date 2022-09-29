function ImgUpload(){
  this.files = [];
  this.preView = function(file, element){
    var imageType = /^image\//;
    if (!imageType.test(file.type)) {
        file = null;
        return;
    }
    var reader = new FileReader();
    reader.onload = function (e) {
      element.find('img').attr('src',e.target.result);
      element.insertBefore($('.img-add'));
    }
    reader.readAsDataURL(file);
  };
  this.submit = function(){
    var self = this;
    $('.submit').on('click',function(){
      var fd = new FormData()
      for(var i = 0;i<self.files.length;i++){
        fd.append('filelist',self.files[i]);
      }
      var album_id = $('.content-bottom')[0].dataset.id;
      $.ajax({
        url:'/upload_file?album_id='+album_id,
        type:'POST',
        data:fd,
        processData:false,
        contentType: false,
        success:function (result) {
          if(result['code'] == 0){
            $('.mark').hide();
            $('.photo-add').hide();
            window.location.reload();
          }
        }
      })
    });
  }
  this.init = function(){
    var self = this;
    file = $('.img-add>input');
    file.on('change',function(){
      file_list = file[0].files;
      for (var i = file_list.length - 1; i >= 0; i--) {
        self.files[self.files.length] = file_list[i];
        var div = $('<div class="img-upload"><img src="#"></div>');
        self.preView(file_list[i],div);
      }
    });
    self.submit();
  };
}

$(function(){
  // 文件上传初始化
  var upload = new ImgUpload()
  upload.init();
  // 新建相册
  $('.content-top a').on('click',function(){
    $('.mark').show();
    $('.album-create').show();
  });
  $('.create-close').on('click',function(){
    $('.mark').hide();
    $('.album-create').hide();
    $('.create-name input').val('');
    $('.create-description textarea').val('');
  });
  $('.create-confirm').on('click',function(){
    var album_name = $('.create-name input').val();
    var album_des = $('.create-description textarea').val();
    $.get('/album/create?name='+album_name+'&desc='+album_des,function(result){
      if(result['code'] == 0){
        $('.mark').hide();
        $('.album-create').hide();
        $('.create-name input').val('');
        $('.create-description textarea').val('');
        window.location.href = '/album'
      }
    })
  });
  $('.create-cancle').on('click',function(){
    $('.mark').hide();
    $('.album-create').hide();
    $('.create-name input').val('');
    $('.create-description textarea').val('');
  });

  //上传照片
  $('.c-btn').on('click',function(){
    $('.mark').show();
    $('.photo-add').show();
  });
  $('.add-close').on('click',function(){
    var con = confirm('离开该页面将退出照片上传。')
    if(con){
      $('.add-content').html('').append('<div class="img-add"><input type="file" multiple="multiple"></div>');
      upload.files = [];
      $('.mark').hide();
      $('.photo-add').hide();
    }
  })
});
