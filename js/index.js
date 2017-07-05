var mainMenuUrl = "data/mainMenu.js";
var subMenuUrl = "";
$(function () {
    $('#chooseEat').one('click',function (){
        $.ajax({
            url:mainMenuUrl,
            type:"get",
            data:{

            },
            success:function(data){
                var maninMenu = JSON.parse(data);
                var typeNum = Math.floor(Math.random()*maninMenu.length);
                // console.log(">>> typeNum="+typeNum);
                subMenuUrl = maninMenu[typeNum].dataUrl;
                console.log("懒人晚餐类型："+maninMenu[typeNum].typeName)
                 // $("#mainCoose").text("总票数："); 
                $('#mainChoose').text("懒人晚餐类型是："+maninMenu[typeNum].typeName);
                // $('#mainCoose').html("懒人的晚餐类型是："+maninMenu[typeNum].typeName);
                $('#chooseEat').text("Go on!");
                $("#chooseEat").one('click',function (){
                    $.ajax({
                        url:subMenuUrl,
                        type:"get",
                        data:{

                        },
                        success:function(data){
                            var subMenu = JSON.parse(data);
                            var subTypeNum = Math.floor(Math.random()*subMenu.length);
                            // console.log(">>> subTypeNum="+subTypeNum);
                            $('#subChoose').text("就这么愉快的决定了:"+subMenu[subTypeNum].subName);
                            $('#chooseEat').text("again?");
                            $('#chooseEat').one('click',function(){
                                window.location.reload();
                            })
                            // $('#chooseEat').one('dblclick',function(){
                            //     $('#congratulations').text("Congratulations!");
                            // })
                        }
                    })
                })
            }
        })
    })
})