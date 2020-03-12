$(document).ready(function() {
    $("#react-search").on('click', function() {
      if($('._Search_display_wrapper').is(":hidden")) {
        $('._Search_display_wrapper').show();
      }
    });

    $(document).on('click', function(event) {
      if(!$(event.target).closest('#react-search').length
        && $('._Search_display_wrapper').is(":visible")) {
        $('._Search_display_wrapper').hide();
      }
    });

    $("body").on('DOMSubtreeModified', '.search__results', function() {
      if (window.location.search === "") {
        $('._Search_display_wrapper').hide();
      } else {
        $('._Search_display_wrapper').show();
        if (document.querySelector('.sk-no-hits') !== null) {
          $('._Search_display_wrapper .search__all').hide();
        } else {
          document.getElementsByClassName("search__all")[0].innerHTML = "<span><a href='search.html"+window.location.search+"'>See all results...</a></span>";
          $('._Search_display_wrapper .search__all').show();
        }
      }
    });
});