FabricPo = {
    form: 595.28,
    cache_width: 841.89,
    a4: 841.89,
    listAttachments: [],
    added_listFPo: [],
    DeleteList: [],
   


    closePopup: function () {
        $('#modalcontent').html("");
        $('#modalcontainer').modal("hide");
        added_listFPo = [];
    },

    AddFabricPo() {

        //setTimeout(function () {
        //    showLoader("Loading..........");
        //}, 0);

        ajaxGetHandler("/FabricPo/FabricPoNew", null, function (data) {

            setTimeout(function () {
                hideLoader();
            }, 0);

            $('.addView').html(data);
           // $('#modalcontainer').modal({ backdrop: 'static', keyboard: false });
            //$('#modalcontainer').modal("show");
            $(".addView .S2GenSupplier").val(null).trigger('change.select2');
            $(".addView .S2TranPurchaseRequisition").val(null).trigger('change.select2');

            $('#supplier_id').on('change', function () {
                var supplierId = $(this).val();
                var selectedSupplier = $(this).select2("data");
                $('#supplier_address').val((selectedSupplier[0].office_address));
                if (supplierId) {
                    BindSupplierConcernPerson(supplierId);
                } else {

                    $('#supplier_concern_person').empty().append('<option value="">Select Concern Person</option>');
                }


            });

            $('#pr_id').on('change', function () {

                setTimeout(function () {
                    showLoader("Loading..........");
                }, 0);

                ajaxGetHandler("/FabricPo/GetPRDetails?pr_id=" + $('#pr_id').val(), null, function (data) {

                    $("#techpack_number").val(data.pr.techpack_number);
                    $("#suggested_supplier_name").val(data.pr.supplier_name);
                    $("#delivery_unit_name").val(data.pr.delivery_unit_name);
                    $("#delivery_unit_id1").val(data.pr.delivery_unit_id);

                    var table = document.getElementById("DTTranFabricDetails").getElementsByTagName('tbody')[0];
                    while (table.firstChild) {
                        table.removeChild(table.firstChild);
                    }
                    data.data.forEach(function (obj) {


                        var newRow = table.insertRow(table.rows.length);

                        var cell1 = newRow.insertCell(0);
                        var cell2 = newRow.insertCell(1);
                        var cell3 = newRow.insertCell(2);
                        var cell4 = newRow.insertCell(3);
                        var cell5 = newRow.insertCell(4);
                        var cell6 = newRow.insertCell(5);
                        var cell7 = newRow.insertCell(6);
                        var cell8 = newRow.insertCell(7);
                        var cell9 = newRow.insertCell(8);


                        cell1.innerHTML = "<input disabled type='number'class='form-control item_id' value=" + obj.item_id + " >";
                        cell2.innerHTML = "<input disabled type='text'class='form-control item_id' value=" + obj.sub_group_name + " >";
                        cell3.innerHTML = "<input disabled type='text'class='form-control' value='" + obj.item_name + "' >";
                        cell4.innerHTML = obj.item_spec;
                        cell4.style.display = "none";
                        cell5.innerHTML = "<input type='text' disabled class='form-control quantity' name='quantity' value=" + obj.item_quantity + ">";
                        cell6.innerHTML = "<input disabled type='text'class='form-control uom' value=" + obj.uomText + " >";

                        cell7.innerHTML = "<input type='number'class='form-control unitPrice'>";
                        cell8.innerHTML = "<input disabled type='number' class='form-control totalPrice'>";
                        cell9.innerHTML = "<input type='text'class='form-control remarks'>";
                    });





                    setTimeout(function () {
                        hideLoader();
                    }, 0);
                    $("#purchaseDetrails").show();

                    obj_fabric_List = [];
                });

            });

            $("#modalcontainer #attachments").change(function () {
                var files = this.files;
                var size = $(this)[0].files.length;
                var allowedExtensions = ['.pdf'];
                formData = new FormData();

                for (var i = 0; i < size; i++) {
                    var file = $(this)[0].files[i];
                    var extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

                    if (allowedExtensions.indexOf(extension) === -1) {
                        showErrorAlert("Alert", "Only  .pdf files are allowed.", "OK", function () { });
                        continue;
                    }

                    var reader = new FileReader();

                    reader.onload = (function (singlefile) {
                        var filename = singlefile.name;
                        var filetype = singlefile.type;

                        return function (e) {
                            var base64String = e.target.result.replace("data:", "").replace(/^.+,/, "");
                            var indx = listAttachments.length;

                            var attachfile = {
                                filename: filename,
                                filetype: filetype,
                                extension: extension.substring(extension.lastIndexOf('.') + 1),
                                base64string: base64String,
                                server_filename: "",
                                current_state: 1,
                                fileindex: indx
                            };

                            listAttachments.push(attachfile);
                            $("#fileNamesContainer").append('<p>' + filename + '</p>');
                            base64String = "";
                        }
                    })(file);

                    reader.readAsDataURL(file);
                }
            });
        });


    },

    createPDF: function () {
        getCanvas().then(function (canvas) {
            var
                img = canvas.toDataURL("image/png"),
                doc = new jsPDF({
                    unit: 'px',
                    format: 'a4'
                });
            doc.addImage(img, 'JPEG', 20, 20);
            doc.save('techsolutionstuff.pdf');
            form.width(1000);
        });
    },

    getCanvas: function () {
        form.width(1000).css('max-width', 'none');
        return html2canvas(form, {
            imageTimeout: 2000,
            removeContainer: true
        });
    },

    ViewPDFFabricPo: function (btn) {

        setTimeout(function () {
            showLoader("Loading..........");
        }, 0);

        var po_id = $(btn).attr("po_id");

        ajaxGetHandler("/FabricPo/GeneratePdf?po_id=" + po_id, null, function (data) {

            ViewPDF(data.status_Result);

        });


    },

    uploadFile: function () {

        $("#modalcontainer #attachments").trigger("click");
    },

    EditFabricPo: function (btn) {
        
        listAttachments = [];
        added_listFPo = [];
        var po_id = $(btn).attr("po_id");
        
        setTimeout(function () {
            showloader("loading..........");
        }, 0);
        showHide($('#btnaddback')[0]);
        try {
            ajaxGetHandler("/FabricPo/FabricPoEdit?po_id=" + po_id, null, function (data) {

                //setTimeout(function () {
                //    hideLoader();
                //}, 0);
                $('.addView').html(data);
               // $('#modalcontent').html(data);
               // $('#modalcontainer').modal({ backdrop: 'static', keyboard: false });
               // $('#modalcontainer').modal("show");

                $(".addView .S2GenSupplier").val(null).trigger('change.select2');

                $.each($("#DTTermANdConditionDetailsEdit tbody tr"), function (key, val) {

                     added_listFPo.push(parseInt($(this).find(".gen_term_and_conditions_details_id").text().trim()));


                });

                $("#modalcontainer #attachments").change(function () {
                    var files = this.files;
                    var size = $(this)[0].files.length;
                    var allowedExtensions = ['.pdf'];
                    formData = new FormData();

                    for (var i = 0; i < size; i++) {
                        var file = $(this)[0].files[i];
                        var extension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();

                        if (allowedExtensions.indexOf(extension) === -1) {
                            showErrorAlert("Alert", "Only  .pdf files are allowed.", "OK", function () { });
                            continue;
                        }

                        var reader = new FileReader();

                        reader.onload = (function (singlefile) {
                            var filename = singlefile.name;
                            var filetype = singlefile.type;

                            return function (e) {
                                var base64String = e.target.result.replace("data:", "").replace(/^.+,/, "");
                                var indx = listAttachments.length;

                                var attachfile = {
                                    filename: filename,
                                    filetype: filetype,
                                    extension: extension.substring(extension.lastIndexOf('.') + 1),
                                    base64string: base64String,
                                    server_filename: "",
                                    current_state: 1,
                                    fileindex: indx
                                };

                                listAttachments.push(attachfile);
                                $("#fileNamesContainer").append('<p>' + filename + '</p>');
                                base64String = "";
                            }
                        })(file);

                        reader.readAsDataURL(file);
                    }
                });
            });


        } catch (e) {
            setTimeout(function () {
                hideLoader();
            }, 0);
        }
    },

    ViewFabricPo: function (btn) {

        var po_id = $(btn).attr("po_id");

        setTimeout(function () {
            showLoader("Loading..........");
        }, 0);
        showHide($('#btnaddback')[0]);
        try {
            ajaxGetHandler("/FabricPo/FabricPoView?po_id=" + po_id, null, function (data) {

                setTimeout(function () {
                    hideLoader();
                }, 0);

                $('.addView').html(data);
               // $('#modalcontainer').modal({ backdrop: 'static', keyboard: false });
               // $('#modalcontainer').modal("show");

            });


        } catch (e) {
            setTimeout(function () {
                hideLoader();
            }, 0);
        }
    },

    ViewFabricPoSubmitted: function (btn) {

        var po_id = $(btn).attr("po_id");

        setTimeout(function () {
            showLoader("Loading..........");
        }, 0);

        try {
            ajaxGetHandler("/FabricPo/FabricPoSubmittedView?po_id=" + po_id, null, function (data) {

                setTimeout(function () {
                    hideLoader();
                }, 0);

                $('#modalcontent').html(data);
                $('#modalcontainer').modal({ backdrop: 'static', keyboard: false });
                $('#modalcontainer').modal("show");

            });


        } catch (e) {
            setTimeout(function () {
                hideLoader();
            }, 0);
        }
    },

    ViewFabricRevisePo: function (btn) {

        var po_id = $(btn).attr("po_id");

        setTimeout(function () {
            showLoader("Loading..........");
        }, 0);

        try {
            ajaxGetHandler("/FabricPo/FabricPoReviseView?po_id=" + po_id, null, function (data) {

                setTimeout(function () {
                    hideLoader();
                }, 0);

                $('#modalcontent').html(data);
                $('#modalcontainer').modal({ backdrop: 'static', keyboard: false });
                $('#modalcontainer').modal("show");

            });


        } catch (e) {
            setTimeout(function () {
                hideLoader();
            }, 0);
        }
    },

    SaveFabricPo: function (btn, isSubmit) {

        $("#modalcontainer #frmAdd").validate({
            rules: {
                po_date: "required",
                delivery_start_date: "required",
                delivery_end_date: "required",
                pr_id: "required",
                supplier_id: "required",
                supplier_concern_person: "required",

            },
            messages: {

                po_date: "Please enter Date",
                delivery_start_date: "Please Enter Date",
                delivery_end_date: "Please Enter Date",
                pr_id: "Please enter PR",
                supplier_id: "Please enter Supplier",
                supplier_concern_person: "Please enter Supplier Concern Person",

            },
            submitHandler: function (event) {

                details = [];

                var termsAndConditions = [];
                $.each($("#DTTranFabricDetails #poDetails tr"), function (key, val) {

                    var obj = {
                        pr_id: $('#pr_id').val(),
                        item_id: check_textbox_value($(this).find(".item_id")),
                        item_quantity: check_textbox_value($(this).find(".quantity")),
                        unit: check_textbox_value($(this).find(".uom")),
                        unit_price: check_textbox_value($(this).find(".unitPrice")),
                        total_price: check_textbox_value($(this).find(".totalPrice")),
                        remarks: check_textbox_value($(this).find(".remarks"))

                    };

                    details.push(obj);

                });


                $.each($("#DTTermANdConditionDetails tbody tr"), function (key, val) {
                    var objterm = {

                        gen_term_and_conditions_id: $(this).find(".gen_term_and_conditions_id").text().trim(),
                        gen_term_and_conditions_details_id: $(this).find(".gen_term_and_conditions_details_id").text().trim(),

                        term_condition_name: $(this).find(".term_condition_name").text().trim(),
                        description: $(this).find(".description").text().trim(),
                    }



                    termsAndConditions.push(objterm);

                });

                var obj_FabricPo = {
                    po_date: $('#modalcontent #po_date').val(),
                    pr_id: $('#pr_id').val(),
                    delivery_start_date: $('#modalcontent #delivery_start_date').val(),
                    delivery_end_date: $('#modalcontent #delivery_end_date').val(),
                    //event_id: check_value($('#modalcontent #event_id').val()),
                    item_structure_group_id: $('#modalcontent #item_structure_group_id').val(),
                    supplier_id: check_value($('#modalcontent #supplier_id').val()),

                    delivery_unit: check_value($('#modalcontent #delivery_unit_id1').val()),
                    //delivery_address: check_value($('#modalcontent #delivery_address').val()),
                    supplier_concern_person: $("#modalcontent #supplier_concern_person option:selected").text(),
                    supplier_address: $('#modalcontent #supplier_address').val(),
                    is_submitted: isSubmit,
                    List_Files: listAttachments,
                    List_po_details: details,
                    vat_amount: $('#modalcontent #vat').val(),
                    discount_amount: $('#modalcontent #discount').val(),
                    final_amount: $('#modalcontent #finalToPrice').val(),
                    terms_conditions_list: termsAndConditions,

                }
                setTimeout(function () {
                    showLoader("Saving..........");
                }, 0);

                ajaxPostObjectHandler("/FabricPo/SaveFabricPo", obj_FabricPo, function (response) {

                    setTimeout(function () {
                        hideLoader();
                    }, 0);

                    if (response.status_Code == "200") {

                        LoadFabricPoData();

                        //LoadFabricPoSubmittedData();


                        showSuccessAlert("Success", response.status_Result, "OK", function () {

                            closePopup(); added_listFPo = []; termsAndConditions = [];

                        });
                    }
                    else {
                        showErrorAlert("Alert", response.status_Result, "OK", function () {

                        });
                    }
                }, true, function () { hideLoader(); }, true);
            }
        });

    },

    UpdateFabricPo: function (btn, isSubmit) {

        details = []

        var termsAndConditions = [];

        $.each($("#DTTranFabricDetails #poDetailsEdit tr"), function (key, val) {

            var obj = {
                po_details_id: check_textbox_value($(this).find(".po_details_id")),
                po_id: $('#po_id').val(),
                pr_id: $('#pr_id').val() ? $('#pr_id').val().trim() : '',
                item_id: check_textbox_value($(this).find(".item_id")),
                item_quantity: check_textbox_value($(this).find(".quantity")),
                unit: check_textbox_value($(this).find(".uom")),
                unit_price: check_textbox_value($(this).find(".unitPrice")),
                total_price: check_textbox_value($(this).find(".totalPrice")),
                remarks: check_textbox_value($(this).find(".remarks")),
                current_state: 2

            };
            details.push(obj);


        });
    },

    SendForApprovalFabricPo: function (btn, isSubmit) {
        var obj = {
            po_id: $('#po_id').val(),
            is_submitted: isSubmit
        }

        setTimeout(function () {
            showLoader("Saving..........");
        }, 0);

        ajaxPostObjectHandler("/FabricPo/SendForApprovalFabricPo", obj, function (response) {

            setTimeout(function () {
                hideLoader();
            }, 0);

            if (response.status_Code == "200") {

                LoadFabricPoData();

                // LoadFabricPoSubmittedData();


                showSuccessAlert("Success", response.status_Result, "OK", function () {

                    closePopup();

                });
            }
            else {
                showErrorAlert("Alert", response.status_Result, "OK", function () {

                });
            }
        }, true, function () { hideLoader(); }, true);

    },

    DeleteFabricPo: function (id) {

        showConfirmationAlert("Alert", "Do You Want to Delete??", "Yes", function () {

            var obj_FabricPo = {
                strMasterID: id
            }

            setTimeout(function () {
                showLoader("Saving..........");
            }, 0);

            ajaxPostObjectHandler("/FabricPo/DeleteFabricPo", obj_FabricPo, function (response) {

                setTimeout(function () {
                    hideLoader();
                }, 0);

                if (response.status_Code == "200") {

                    LoadFabricPoData();
                    // LoadFabricPoSubmittedData();

                    showSuccessAlert("Success", response.status_Result, "OK", function () {

                        closePopup();

                    });
                }
                else {
                    showErrorAlert("Alert", response.status_Result, "OK", function () {

                    });
                }
            }, true, function () {

                setTimeout(function () {
                    hideLoader();
                }, 0);

            }, true);

        });
    },

   
    

    LoadFabricPoData: function () {
        //var input = {
        //    fiscal_year_id: $("#fiscal_year_id").val(),
        //    event_id: $("#event_id").val(),
        //    supplier_id: $("#sup_fil").val(),
        //    delivery_unit_id: $("#delivery_unit_id").val()
        //};
        var input = {
            pagesize: 10,
            pagenumber: 1
        };

        var dt_search = {
            filterId: '#dtPendingList_filter input[type=search]',
            tableId: "#dtPendingList",
            placeholder: 'Search PO',
            btn_text: 'Clear Search',
            ajax_url: 'https://localhost:7102/api/FabricPo/GetAll', 
            input: input,
            
           
            
            createdRow_func: function (row, data, dataIndex) {
                $(row).attr('row_index', parseInt(data.row_index) - 1);
                $(row).attr("po_id", data.po_id);
            },
            columns: [
                { "data": "pr_id", "name": "pr_id", "autoWidth": true },
                { "data": "po_id", "name": "po_id", "autoWidth": true },
                { "data": "event_id", "name": "event_id", "autoWidth": true },
                { "data": "fiscal_year_id", "name": "fiscal_year_id", "autoWidth": true },
                { "data": "item_structure_group_id", "name": "item_structure_group_id", "autoWidth": true },
                { "data": "po_no", "name": "po_no", "autoWidth": true },
                { "data": "po_date", "name": "po_date", "autoWidth": true },
                { "data": "delivery_start_date", "name": "delivery_start_date", "autoWidth": true },
                { "data": "delivery_end_date", "name": "delivery_end_date", "autoWidth": true },
                { "data": "supplier_id", "name": "supplier_id", "autoWidth": true },
                { "data": "delivery_unit", "name": "delivery_unit", "autoWidth": true }
            ],
            btn_class_name: 'btn btn-custom'
        };

        initialize_datatable(dt_search);
    },


    LoadFabricPoSubmittedData: function () {

        var input = {
            fiscal_year_id: $("#fiscal_year_id").val(),
            event_id: $("#event_id").val(),
            supplier_id: $("#sup_fil").val(),
            delivery_unit_id: $("#delivery_unit_id").val()

        };
        var dt_search = {

            filterId: '#dtSubmittedList_filter input[type=search]',
            tableId: "#dtSubmittedList",
            placeholder: 'Search PO',
            btn_text: 'Clear Search',
            ajax_url: 'https://localhost:7102/api/FabricPo/GetAll', 
            input: input,
            hideFirstColumn: false,
            createdRow_func: function (row, data, dataIndex) {
            },
            columns: [
                { "data": "po_no", "name": "po_no", "autoWidth": true },
                { "data": "pr_no", "name": "pr_no", "autoWidth": true },
                { "data": "po_date", "name": "po_date", "autoWidth": true },
               // { "data": "event_title", "name": "event_title", "autoWidth": true },
                { "data": "supplier_name", "name": "supplier_name", "autoWidth": true },
                { "data": "unit_name", "name": "unit_name", "autoWidth": true },
                { "data": "datatablebuttonscode", "name": "datatablebuttonscode", "autoWidth": true }
            ],
            btn_class_name: 'btn btn-custom'
        };

        initialize_datatable(dt_search);

    },

    SendForApproval: function (btn) {

        details = []

        $.each($("#DTTranFabricDetails tbody tr"), function (key, val) {

            var obj = {
                pr_id: $('#pr_id').val(),
                item_id: check_textbox_value($(this).find(".item_id")),
                item_quantity: check_textbox_value($(this).find(".quantity")),
                unit: check_textbox_value($(this).find(".uom")),
                unit_price: check_textbox_value($(this).find(".unitPrice")),
                total_price: check_textbox_value($(this).find(".totalPrice")),
                remarks: check_textbox_value($(this).find(".remarks"))

            };
            details.push(obj);


        });

        var obj_FabricPo = {
            po_date: $('#modalcontent #po_date').val(),
            pr_id: $('#pr_id').val(),
            po_id: $('#po_id').val(),
            delivery_start_date: $('#modalcontent #delivery_start_date').val(),
            delivery_end_date: $('#modalcontent #delivery_end_date').val(),
            supplier_id: check_value($('#modalcontent #supplier_id').val()),

            is_submitted: 2,
            List_Files: listAttachments,
            List_po_details: details,
            DeleteList: DeleteList
        }
        setTimeout(function () {
            showLoader("Saving..........");
        }, 0);

        ajaxPostObjectHandler("/FabricPo/UpdateFabricPo", obj_FabricPo, function (response) {

            setTimeout(function () {
                hideLoader();
            }, 0);


            if (response.status_Code == "200") {

                LoadFabricPoData();
                // LoadFabricPoSubmittedData();



                showSuccessAlert("Success", response.status_Result, "OK", function () {

                    closePopup(); listAttachments = []; DeleteList = [];

                });
            }
            else {
                showErrorAlert("Alert", response.status_Result, "OK", function () {

                });
            }
        }, true, function () { hideLoader(); }, true);


    },

    BindSupplierConcernPerson: function (supplierId) {

        var id = parseInt(supplierId);

        ajaxGetHandler("/FabricPo/GetConcernPersons?supplier_id=" + id, null, function (data) {
            var concernPersonDropdown = $('#supplier_concern_person');
            concernPersonDropdown.empty();
            concernPersonDropdown.append('<option value="">Select Concern Person</option>');
            var count = 1;
            data.forEach(function (person) {
                concernPersonDropdown.append(
                    '<option value="' + count + '">' + person.name + '</option>'

                );
                count++;
            });
        });
    },

    updateTotalUnitPrice: function () {
        var totalUnitPrice = 0;


        $('#DTTranFabricDetails tbody tr').each(function () {

            var totalPrice = parseFloat($(this).find('.totalPrice').val()) || 0;
            totalUnitPrice += totalPrice;
        });


        $('#totalUnitPrice').val(totalUnitPrice.toFixed(2));
    },

    calculateFinalTotal: function () {

        var total = parseFloat($('#totalUnitPrice').val()) || 0;

        var vat = parseFloat($('#vat').val()) || 0;


        var discount = parseFloat($('#discount').val()) || 0;


        var finalTotal = total + vat - discount;


        $('#finalToPrice').val(finalTotal.toFixed(2));
    }

   
}



$(function () {       

    
     

    FabricPo.LoadFabricPoData();

    FabricPo.LoadFabricPoSubmittedData();
    // LoadFabricPoRevisedData();

    BindTabEvents("tab_precostinglanding");


    $(document).on('change', '#delivery_start_date', function () {
        var delivery_start_date = $('#delivery_start_date').val();
        var po_date = $('#po_date').val();
        if (delivery_start_date < po_date) {


            showErrorAlert("Alert", "Delivery start date cannot be earlier than Po Date!!", "OK");
            $('#delivery_start_date').val('');

        }


    })

    $(document).on('change', '#delivery_end_date', function () {
        var delivery_start_date = $('#delivery_start_date').val();
        var delivery_end_date = $('#delivery_end_date').val();
        if (delivery_end_date < delivery_start_date) {


            showErrorAlert("Alert", "Delivery end date cannot be earlier than Delivery start Date!!", "OK");
            $('#delivery_end_date').val('');

        }


    })

    $(document).on('input', '.unitPrice', function () {

        var $row = $(this).closest('tr');
        var quantity = parseFloat($row.find('.quantity').val());
        var unitPrice = parseFloat($(this).val());
        var totalPrice = quantity * unitPrice;
        $row.find('.totalPrice').val(totalPrice.toFixed(2));
        var $input = $(this);
        var value = $input.val();
        if (value.length > 1 && value.startsWith('0')) {
            $input.val(value.substring(1));
        }

        updateTotalUnitPrice();




    });

    $(document).on('keypress', '.unitPrice', function (e) {
        // Allow only numbers and the period
        if ((e.which < 48 || e.which > 57) && e.which !== 46) {
            e.preventDefault();
        }

    });

    $(document).on('keypress', '.vat', function (e) {

        let currentValue = $(this).val();


        if (currentValue.length === 0 && e.which === 48) {
            e.preventDefault();
        }


        if ((e.which < 48 || e.which > 57) && e.which !== 46) {
            e.preventDefault();
        }

    });

    $(document).on('keypress', '.discount', function (e) {

        let currentValue = $(this).val();


        if (currentValue.length === 0 && e.which === 48) {
            e.preventDefault();
        }


        if ((e.which < 48 || e.which > 57) && e.which !== 46) {
            e.preventDefault();
        }

    });

    $(document).on('#vat').on('change', FabricPo.calculateFinalTotal);
    $(document).on('#discount').on('change', FabricPo.calculateFinalTotal);

});

