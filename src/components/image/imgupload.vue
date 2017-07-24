<template>
      <div class="weui-panel weui-panel_access" id="uploader">
        <div class="weui-cell__bd">
            <div class="weui-uploader">
                <div class="weui-uploader__hd">
                    <p class="weui-uploader__title">图片上传 <input v-model="itemId" id="itemId" type="hidden"></p>
                </div>
                <div class="weui-uploader__bd">
                    <ul class="weui-uploader__files" id="uploaderFiles">
                    </ul>
                    <div class="weui-uploader__input-box">
                        <input id="uploaderInput" class="weui-uploader__input" type="file" accept="image/*" capture="camera" multiple="" />
                    </div>
                </div>                
            </div>
        </div>
        </div>
</template>

<script>
import weui from 'weui.js'
import $ from 'jquery'
import {addImage,deleteImage} from '@/service/imageStore'

    export default {
        data(){
            return{
            }
        },
        props: {
            itemId:{
            type:String,
            required: true
            }
        },
        mounted(){
            var uploadCustomFileList = [];
            weui.uploader('#uploader', {
                url: 'http://localhost:8888/upload/img',
                auto: false,
                type: 'file',
                fileVal: 'uploadimg',
                compress: {
                    width: 1600,
                    height: 1600,
                    quality: .8
                },
                onBeforeQueued: function(files) {
                    // `this` 是轮询到的文件, `files` 是所有文件

                    if(["image/jpg", "image/jpeg", "image/png", "image/gif"].indexOf(this.type) < 0){
                        weui.alert('请上传图片');
                        return false; // 阻止文件添加
                    }
                    if(this.size > 10 * 1024 * 1024){
                        weui.alert('请上传不超过10M的图片');
                        return false;
                    }
                    if (files.length > 5) { // 防止一下子选择过多文件
                        weui.alert('最多只能上传5张图片，请重新选择');
                        return false;
                    }


                    // return true; // 阻止默认行为，不插入预览图的框架
                },
                onQueued: function(){
                    console.log(this);

                    // console.log(this.status); // 文件的状态：'ready', 'progress', 'success', 'fail'
                    // console.log(this.base64); // 如果是base64上传，file.base64可以获得文件的base64

                    this.upload(); // 如果是手动上传，这里可以通过调用upload来实现；也可以用它来实现重传。
                    uploadCustomFileList.push(this);
                    // this.stop(); // 中断上传

                    // return true; // 阻止默认行为，不显示预览图的图像
                },
                onBeforeSend: function(data, headers){
                //    console.log(this, data, headers);
                    // $.extend(data, { test: 1 }); // 可以扩展此对象来控制上传参数
                    // $.extend(headers, { Origin: 'http://127.0.0.1' }); // 可以扩展此对象来控制上传头部

                    // return false; // 阻止文件上传
                },
                onProgress: function(procent){
                //    console.log(this, procent);
                    return true; // 阻止默认行为，不使用默认的进度显示
                },
                onSuccess: function (ret) {
                    let iid = $('#itemId').val();
                    $(ret).each(function(){
                         addImage({"itemId":iid,'imageName':this});
                    });
                    // addImage({"item":'111','imageName':this})
                    // return true; // 阻止默认行为，不使用默认的成功态
                },
                onError: function(err){
                    console.log(this, err);
                    // return true; // 阻止默认行为，不使用默认的失败态
                }
            });
        // 缩略图预览
            document.querySelector('#uploaderFiles').addEventListener('click', function(e){
                var target = e.target;
                while(!target.classList.contains('weui-uploader__file') && target){
                    target = target.parentNode;
                }
                if(!target) return;

                var url = target.getAttribute('style') || '';
                var id = target.getAttribute('data-id');

                if(url){
                    url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
                }
                var gallery = weui.gallery(url, {
                    className: 'custom-name',
                    onDelete: function(){
                        weui.confirm('确定删除该图片？', function(){
                            var index;
                            for (var i = 0, len = uploadCustomFileList.length; i < len; ++i) {
                                var file = uploadCustomFileList[i];
                                if(file.id == id){
                                    index = i;
                                    break;
                                }
                            }
                            
                            let iid = $('#itemId').val();
                            console.log(uploadCustomFileList[index]);
                            let imageName =uploadCustomFileList[index].name;
                            deleteImage({"itemId":iid,'imageName':imageName});
                            uploadCustomFileList.splice(index, 1);

                            target.remove();
                            gallery.hide();
                        });
                    }
                });
            });
        },
        methods: {

        }        
    }
</script>

<style >

</style>
