	var conn = null;

	function onConnectionStatus(nstatus)
	{
		if(nstatus == Strophe.Status.ERROR) 
		{
			alert("Unknown error accured");
		}
		else if(nStatus == Strophe.Status.REGISTER)
		{
			conn.register.fields.username == document.getElementById("username").value;
			conn.register.fields.password == document.getElementById("username").value;
			document.register.submit();
		}
		else if(nStatus == Strophe.Status.REGISTERED)
		{
			alert("Registation is successful")
		}
		else if(nStatus == Struphe.Status.REGIFAIL)
		{
			alert("Registation Faild. Please try again later")
		}
		else if(nStatus == Strophe.Status.CONFLICT)
		{
			alert("Try some other username and password")
		}
		else if(nStatus == Strophe.Status.NOTACCEPTABLE)
		{
			alert("Try some other username and password")
		}
	}
	function register()
	{
		if(document.getElementById("username").value == "" || document.getElementById("password").value == "") 
		{
			alert ("Please enter both username and password");
			return;
		}

		conn = newStrophe.Connection("http://localhost:5280/");
		conn.register.connect("localhost", onConnectionStatus, 60, 1);
	}