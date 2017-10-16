 $.ajax({
         url: "http://h6.duchengjiu.top/shop/api_cat.php",
         type: "get",
         dataType: "json",
         page:2,
         pagesize:50,
         data: {},
         success: function (json){
           console.log(json);
           var data = json.data;
           var str = '';
           for (var i = 0; i < data.length; i++) {
                 var obj = data[i];
                 str += `<li><a href="index.html?cat_id=${obj.cat_id}">${obj.cat_name}</a></li>`
                }
              $('#type').html(str);
            }
        }
    );
