
var searchCode = decodeURIComponent(searchValue);
$('#search-btn').on('touchstart',function(){
    $.ajax({
            url: "http://h6.duchengjiu.top/shop/api_goods.php",
            type: "get",
            search_text:searchCode,
            dataType: "json",
            page:1,
            pagesize:20,
            data: {},
            success: function (json){
                console.log(json);
                var data = json.data;
                var str = '';
                var searchValue = location.href.split("?").slice(1).toString().split("&").slice(0).toString().split("=").slice(0).toString();
                for (var i = 0; i < data.length; i++) {
                    var obj = data[i];
                    str += `<li><a href="../html/search.html">${obj.cat_name}</a></li>`
                }
                // $('#cat').html(str);
            }
        }
    );
});





