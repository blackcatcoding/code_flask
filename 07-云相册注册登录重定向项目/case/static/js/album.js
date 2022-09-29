$('.c-main>ul>li').on('click',function(){
  album_id = this.dataset.id;
  window.open('/photo?id='+album_id,'_self')
})
