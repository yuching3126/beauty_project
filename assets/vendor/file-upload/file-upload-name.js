function formSubmit() {
  var fullpath = document.getElementById("branch-file").value;
  var backslash=fullpath.lastIndexOf("\\");
  var filename = fullpath.substr(backslash+1);

  var confirm_message = confirm("Files selected for import are \n Branch Files: "+filename+"\n\nDo you want to proceed?");
   if (confirm_message==false) {
      return false;
   } else {
      document.getElementById("import_form").submit();
      document.body.style.cursor = "wait";
   }
}