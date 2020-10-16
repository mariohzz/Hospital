$(function () {
    'use strict';
    $(document).on("click", ".uploading label", function () {
        $(this).next().click();
    });
    // add cloumn 
    $(document).on("click", "#add-col", function() {
        $(this).parent().next().find("thead tr").append("<th contenteditable='true'>--</th>");
        $(this).parent().next().find("tbody tr").append("<td>-</td>");
    });

    // remove  cloumn 
    $(document).on("click", "#remove-col", function() {
        if($(this).parent().next().find("thead th").length != 2){
            $(this).parent().next().find("thead tr th:last-of-type").remove();
            $(this).parent().next().find("tbody tr td:last-of-type").remove();
        }
    });

    var formFile = `
        <select class = "custom-select mb-3 " id = "kind-file"">
            <option value = "">اختار</option>
            <option value = "">يومي </option>
            <option value = "security">جانبي</option>
        </select>

        <select class = "custom-select mb-3 " id = "employe"">
            <option value = "">اختار</option>
            <option value = "">موظف غرفة المراقبة</option>
            <option value = "security">موظف الأمن</option>
            <option value = "safty">موظف السلامة</option>
        </select>
    <!--Start uploading file-->
    <div class = 'uploading text-center  ml-5 mb-3 mt-0 d-inline-block'>
        <form class = "shadow-none">
            <label class = "m-0"><i class="fas fa-cloud-upload-alt align-middle"></i></label>
            <input type= "file" class ="img-upload" hidden name="img">
        </form>
        <a href=  '#' class ='text-primary '>أسم الملف <i class ='fas fa-check-circle  text-success'></i></a>
    </div>
    <!--End uploading file-->
        
    <div>
        <button class = "btn btn-primary" id='save-form' type = "button">إنشاء النموذج</button>
        <button class = "btn btn-danger" id = "cancel-form" type = "button">إلغاء النموذج</button>
    </div>
    `,
    tableForm = `
    <div class = 'table-form'>
        <select class = "custom-select mb-3 " id = "kind-file"">
            <option value = "">اختار</option>
            <option value = "">يومي </option>
            <option value = "security">جانبي</option>
        </select>
        <select class = "custom-select mb-3" id = "employe">
            <option value = "">اختار</option>
            <option value = "">موظف غرفة المراقبة</option>
            <option value = "security">موظف الأمن</option>
            <option value = "safty">موظف السلامة</option>
        </select>
        <!--form titles -->
        <div class = "form-titles mb-3 row">
            <div class ='col-md-4'>
                <input type = "text" class = "form-control mb-3" placeholder="عنوان النموذج">
            </div>
            <div class ='col-md-4 mb-3 mb-md-0'>
                <textarea class = " form-control" placeholder="نص النموذج"></textarea>
            </div>
            <div class ='col-md-4'>
                <input type ='number' min='0' placeholder ='عدد الصفوف' class = 'form-control'>
            </div>
        </div>


        <div class = "form-controls">
            <button class = 'btn btn-success mb-4' id = 'add-col'><i class ='fas fa-plus'></i> أضافة عمود</button>
            <button class = 'btn btn-danger mb-4' id='remove-col'><i class ='fas fa-trash'></i> مسح عمود</button>
        </div>
        <div class = 'table-wrapper'>
            <table class = "table">
                <thead>
                    <tr>
                        <th contenteditable="true">م</th>
                        <th contenteditable="true">الموقع</th>
                        <th contenteditable="true">الغرض من الأستلام</th>
                        <th contenteditable="true">وقت الأستلام</th>
                        <th contenteditable="true">اسم المستلم</th>
                        <th contenteditable="true">التوقيع</th>
                        <th contenteditable="true">وقت التسليم</th>
                        <th contenteditable="true">ملاحظة</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
        
    <div>
        <button class = "btn btn-primary" id='save-form' type = "button">إنشاء النموذج</button>
        <button class = "btn btn-danger" id = "cancel-form" type = "button">إلغاء النموذج</button>
    </div>
    `;

    $(document).on("click", "#cancel-form", function () {
        $(".set-form").children().remove();
        $(".choose-form .btn").removeAttr("disabled");
    });

    // choose form 
    $(".choose-form button").click(function () {
        var selVal = $(this).parents("form").find("select").val();
        console.log(selVal);
        if(selVal == "") {
            alert("يرجي اختيار نوع النموذج");
        } else if (selVal == "file") {
            $(".set-form").append(formFile);
            $(this).prop("disabled", true);
        } else {
            $(".set-form").append(tableForm);
            $(this).prop("disabled", true);
        }
    });


});