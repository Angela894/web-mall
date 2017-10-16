   $.ajax({
            url: "http://h6.duchengjiu.top/shop/api_goods.php?cat_id=",
            type: "get",
            dataType: "json",
            page:1,
            pagesize:20,
            data: {},
            success: function (json){
            console.log(json);
            var data = json.data;
            var str = '';
            for (var i = 0; i < data.length; i++) {
                 var obj = data[i];
                 str += `<li>
                         <a href="html/details.html?goods_id=${obj.goods_id}">${obj.cat_name}
                         <div class="hot-goods-agrandir"><img src="${obj.goods_thumb}"></div>
                         <div class="hot-goods-price">￥&nbsp;${obj.price}</div>
                         <div class="hot-goods-name">${obj.goods_name}</div></a>
                         </li>`
                }
                $('#hot-goods').html(str);
            }
        });
