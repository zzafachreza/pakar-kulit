function MenuSaran(){

		Loader();

		// $.ajax({

		// 	url:"api/gangguan_data.php",
		// 	type:"POST",
		// 	success:function(html){
		// 		console.log(html);
		// 	}
		// })

	$.ajax({
			url:'page/saran/index.php',
			success:function(html){


            		  dataLoad.html(html);



			           
			           var table = $("#tableData").DataTable({
			            		"processing": true,
						        "serverSide": true,
						        "scrollX": true,
						        "order": [[ 0, "asc" ]],
						        "ajax": {
						        	
						        	url:"api/saran_data.php",
						        	type:"POST"

						        },
						        "deferRender": true,
					            "aLengthMenu": [[5, 10, 50],[ 5, 10, 50]], // Combobox Limit
					            'columnDefs': [

							            {
									         'targets': 0,
									         'searchable': false,
									         'orderable': false,
									         'className': 'dt-body-center',
									         'render': function (data, type, full, meta){
									             return '<label class="kt-checkbox kt-checkbox--single kt-checkbox--all kt-checkbox--solid">'+
										            		'<input class="data_cek" type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">&nbsp;<span></span>'+
										            	'</label>';
									         }
									      },
									      {
									      	'targets': 5,
									      	'width': '16%', 
									      	render:function(data){
											      return moment(data).format('DD/MM/YYYY');
											    }
											},
									     


							      ],
					            "columns": [
					            	{ "data": "id" },
					                { "data": "nama" }, 
					                 { "data": "email" }, 
					                  { "data": "subjek" }, 
					                   { "data": "pesan" }, 
					                    { "data": "tgl" }, 
					                     { "data": "time" },  // Tampilkan nama
						         ],
						        	


			            	});

			           
           		// buka form tambah



            	// Handle click on "Select all" control

					$("#select_all").change(function(){

					   $('input[type="checkbox"]').prop('checked', this.checked); 
						



					});



				
				   $("#btnPilihAll").click(function(){

				   		var rows_selected = $(".data_cek:checked");
				   		
				   		var data=[];

				   		for(i=0;i<rows_selected.length;i++)
				   		{
				   			data.push(rows_selected[i].value);
				   		}


						     	
				   		if (data=="") {
				   			Not("Tidak ada data yang terpilih..","danger","info-circle");
				   		}else{



							    $.ajax({
							    	url:'api/saran_delete.php',
							    	type:'POST',
							    	data:{id:data},
							    	success:function(data){
							    		
							    		if (data==200) {
							    			MenuSaran();
							    			Not("data berhasil dihapus..","success","info-circle");
							    		}
							    		
							    	}
							    })
				   		}

				   });

					     


				

			
			}
		});




		$(".kt-subheader__title").text("Data saran");

	}





 function AddSaran(){
 						Loader();

						$.ajax({
							url:'page/saran/form_add.php',
							success:function(html){

									dataLoad.html(html);
									$(".kt-subheader__title").text("Add saran");


							}
						 });
 }






  	function ViewSaran(id){



 						Loader();

						$.ajax({
							url:'page/saran/form_view.php',
							type:'POST',
							data:{id:id},
							success:function(html){

									dataLoad.html(html);
									$(".kt-subheader__title").text("View saran")

							}
						 });
 	}


 	  


 						