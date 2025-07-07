$(document).ready(function(){
var count=0; // to count blank fields

/*------------validation function-----------------*/
$(".submit_btn").click(function(event){
//fetching radio button by name
	var radio_check = $('.rad');
	
	//fetching all inputs with same class name text_field and an html tag textarea 
	var input_field = $('.text_field');
	var text_area = $('textarea');
	
	//validating radio button
	if(radio_check[0].checked== false && radio_check[1].checked== false){
	 var y = 0;
	}
	else{
	 var y = 1; 
	}
	
	//for loop to count blank inputs 
	for(var i=input_field.length;i>count;i--){
	if(input_field[i-1].value==''|| text_area.value=='')
		{
			count = count + 1;
		    
		}
	else{			
			count = 0;
		}
	}
	
	//Notifying validation 
		if(count!=0||y==0){
		
			alert("*All Fields are mandatory*");
			event.preventDefault();	
			}
			else{			
				return true;
			}
});

/*---------------------------------------------------------*/
    $(".next_btn").click(function(){           //Function runs on NEXT button click 
        // validate the form
        var form = $("#nomination_form");
        form.validate({
            errorElement: 'div',
            errorClass: "container alert alert-danger",
			rules: {
				nomination_type: {
					required: true
				},
                nomination_category: {
                    required: true
                },
                nomination_subcategory: {
                    required: true
                },
                nominator_name: {
                    required: true,
                    minlength: 2
                },
                nominator_email: {
                    required: true,
                    email: true
                },
                nominator_phone: {
                    required: true
                },
                nominee_name: {
                    required: true,
                    minlength: 2
                },
                nominee_email: {
                    required: true,
                    email: true
                },
                nominee_phone: {
                    required: true
                },
                nomination_reason: {
                    required: true
                },
                supporting_evidence: {
                    required: true
                },
                impact: {
                    required: true
                },
                innovation: {
                    required: true
                },
                sustainability: {
                    required: true
                },
                inclusivity: {
                    required: true
                },
                reference_one_name: {
                    required: true
                },
                reference_one_phone: {
                    required: true
                },
                reference_one_email: {
                    required: true,
                    email: true
                },
                reference_two_name: {
                    required: true
                },
                reference_two_phone: {
                    required: true
                },
                reference_two_email: {
                    required: true,
                    email: true
                },
                declaration: {
                    required: true
                },
                files: {
                    required: true
                }
                
			},
			messages: {
				nomination_type: {
					required: "Please select nomination type"
				},
                nomination_category: {
                    required: "Please select nomination category"
                },
                nomination_subcategory: {
                     required: "Please select nomination subcategory"
                },
                nominator_name: {
                    required: "Please enter nominator name",
                    minlength: "Name minimum length is 2"
                },
                nominator_email: {
                    required: "Please enter nominator email",
                    email: "Please enter a valid email"
                },
                nominator_phone: {
                    required: "Please enter nominator phone number"
                },
                nominee_name: {
                    required: "Please enter nominee name",
                    minlength: "Name minimum length is 2"
                },
                nominee_email: {
                    required: "Please enter nominee email",
                    email: "Please enter a valid email"
                },
                nominee_phone: {
                    required: "Please enter nominee phone number"
                },
                nomination_reason: {
                    required: "Please provide reason(s) this nomination"
                },
                supporting_evidence: {
                    required: "Please provide evidence to support this nomination"
                },
                impact: {
                    required: "Please decribe positive impact of this nomination"
                },
                innovation: {
                    required: "Please explain the novelty and creativity of this nomination"
                },
                sustainability: {
                    required: "Please explain the long-term viability and scalability of this nomination"
                },
                inclusivity: {
                    required: "Please explain how this nomination promotes digital inclusion"
                }, 
                reference_one_name: {
                    required: "Please provide reference 1 name"
                },
                reference_one_phone: {
                    required: "Please provide reference 1 phone number"
                },
                reference_one_email: {
                    required: "Please provide reference 1 email",
                    email: "Please provide a valid email"
                },
                reference_two_name: {
                    required: "Please provide reference 2 name"
                },
                reference_two_phone: {
                    required: "Please provide reference 2 phone number"
                },
                reference_two_email: {
                    required: "Please provide reference 2 email",
                    email: "Please provide a valid email"
                },
                declaration: {
                    required: "Please confirm"
                },
                nomination_files: {
                    required: "Please upload some documents to support this nomination"
                }
			}
		});

        if (form.valid() == true){
	        $(this).parent().next().fadeIn('slow');
	        $(this).parent().css({'display':'none'});
            //Adding class active to show steps forward;
	        $('.li-active').next().addClass('li-active active');
        }
	});
	
	$(".pre_btn").click(function(){            //Function runs on PREVIOUS button click 
	    $(this).parent().prev().fadeIn('slow');
	    $(this).parent().css({'display':'none'});
        //Removing class active to show steps backward;
	    $('.active:last').removeClass('active');
	});
	
//validating all input and textarea fields	
	$(".submit_btn").click(function(e){	
	if($('input').val()=="" || $('textarea').val()==""){	
			alert("*All Fields are mandatory*");
			return false;
		}
		else{
			return true;
		}
	});
});
