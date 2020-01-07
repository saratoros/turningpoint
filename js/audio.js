$('#play').click(function() {
        $('#playMe').trigger('play');
        $(this).hide();
        $('#pause').show();
      });

      $('#pause').click(function() {
        $('#playMe').trigger('pause');
        $(this).hide();
        $('#play').show();
      });