export function sendMessage() {
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbz6fF-b5aVlboRmj4UIC0eMyziqb25MkZ4pFAiJ6bvYsiHKn2PO/exec",
        type: "POST",
        dataType: "json",
        data: {
            name: $("#name").val() 
            email: $("#email").val()  
            message : $("#message").val()            
        },
        error: function (response) {
            if (!response.Success)
               alert("Server error.");
        },
        success: function (response) {
            if (!response.Success)
                       alert("Form Error.");
        }
    });
    return false;
}
