<html>

<head>

<title>Bookmark manager </title>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<meta http-equiv="Cintent - Type" content="text/html; charset=utf-8" />

</head>



<body>

<div class ="container">

<div class = "row">

<div class = "col-sm-12 col-md-8" >

<table id = "bookmarks" class="table">



<tr>

<th>ID</th>

<th>Name</th>

<th>Description</th>

<th>Link</th>

<th>Actions</th>

</tr>



</table>

</div>

<div class="col-sm-12 col-md-4">

<form id="addBm"  action="php.php" method="post">

<p><input type="text" name="name" id="nameInput" placeholder="Name" required></p>

<p><input type="text" name="desc" id="descInput" placeholder="Description" required></p>







<p><input type="text" name="link" placeholder="Link" required="" id="linkInput"></p>

<input type="hidden" id="idInput" value="0" name="id">

<button id="sendData">Send Data</button>

			</form>

		</div>

	</div>



</div>

</body>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>



<script>

	$(document).ready(function() {

		var bookmark1 = {id: 1, name: 'Bookmark1', desc: 'Description', link: 'http://www.google.com'};

		var bookmarks = [bookmark1,{id: 2, name: 'Bookmark 2', desc: 'Description 2', link: 'http://youtube.com/'},{id: 3, name: 'Bookmark3', desc: 'Decription 3', link: 'http://facebook.com/'}

		];



		display(bookmarks);

		function display(bookmarks) {

			$(".bookmark").remove();

			for(i=0;i<bookmarks.length;i++) {

				$("#bookmarks").append(`

					<tr class="bookmark">

					<td>` +bookmarks[i][`id`]+ `</td>

					<td>` +bookmarks[i][`name`]+ `</td>

					<td>` +bookmarks[i][`desc`]+ `</td>

					<td> <a href="` + bookmarks[i][`link`] + `">Link</a></td>

  <td><button class="edit" data-id="`+bookmarks[i]["id"]+`">Edit</button><button class="delete" data-id="`+bookmarks[i]["id"]+`">Delete</button></td>

</tr>

`);



}



   }



$("#addBm").submit(function(event){



    event.preventDefault();

    if($("#idInput").val()==0){

     var newBookmark={id:bookmarks[bookmarks.length-1]['id']+1, name:$("#nameInput").val(), desc:$("#descInput").val(), link:$("#linkInput").val()}

       bookmarks.push(newBookmark);

}



else{

   for(i=0;i<bookmarks.length;i++){

if(bookmark[i]["id"]==$("idInput").val()){

   bookmarks[i]["name"]=$("#nameInput").val();

   bookmarks[i]["desc"]=$("#descInput").val();

   bookmarks[i]["link"]=$("#linkInput").val();

    }

}



   $("#idInput").val("0");

}

   $("#addBm")[0].reset();

display(bookmarks);

});









$(document).on("click",".delete", function(event){

	event.preventDefault();

	var id=$(this).data("id");

	bookmarks=bookmarks.filter(function(el){

		return id!=el.id;

	});

	display(bookmarks);

});

$(document).on("click",".edit", function(event){

	event.preventDefault();

	var id=$(this).data("id");

	selectedBm=bookmarks.filter(function(el){

		return id==el['id'];

	});

	$("#nameInput").val(selectedBm[0]["name"]);

	$("#descInput").val(selectedBm[0]["desc"]);

	$("#linkInput").val(selectedBm[0]["link"]);

	$("#idInput").val(selectedBm[0]["id"]);

   });



});

   </script>

</html>