$(document).ready(function(){
    $('.delete-poke').on('click', function(e){
      $target = $(e.target);
      const id = $target.attr('data-pokeid');
  
      $.ajax({
        type: 'DELETE',
        url: '/pokemon/'+id,
        success: function (response){
          alert('Deleting Pokemon');
          
        },
        error: function(err){
          console.error(err);
        }
      });
    });
  });