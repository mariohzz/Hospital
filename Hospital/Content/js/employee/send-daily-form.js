$(function () {
    "use strict";
    $(document).on("click", ".btn-secondary" ,function () {
           $("body").append(`
           <!--upload file-->
           <div class="layer-upload-file position-fixed">
               <div class="wrapper d-flex justify-content-center align-items-center">
                   <div class = 'uploading bg-white p-5  position-relative'>                             
                    <div class="close-upload position-absolute bg-danger text-center">
                        <i class='fas fa-times text-white'></i>
                    </div>
                       <form action="">
                           <label class = "m-0"><i class="fas fa-cloud-upload-alt align-middle"></i></label>
                           <input type= "file" class ="img-upload" hidden name="img">
                           <a href=  '#' class ='text-primary '>أسم الملف <i class ='fas fa-check-circle  text-success'></i></a>
                       </form>
                   </div>
               </div>
           </div>`);
    });
    $(document).on("click", ".close-upload ", function () {
        $(".layer-upload-file").remove();
    });
});