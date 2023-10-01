	let a = [];
	function myFunction(d) 
	{	
		for(let i = 0; i < d.length; i++)
		{
			a[i] = document.getElementById(d[i]);
				
			a[i].addEventListener('touchmove', function(event){
			var touch = event.targetTouches[0];
			
			// Place element where the finger is
			a[i].style.left = touch.pageX-25 + 'px';
			a[i].style.top = touch.pageY-25 + 'px';
			event.preventDefault();
			}, false);
				
			a[i].onmousedown = function(e) 
			{

			  var coords = getCoords(a[i]);
			  var shiftX = e.pageX - coords.left;
			  var shiftY = e.pageY - coords.top;

			  a[i].style.position = 'absolute';
			  document.body.appendChild(a[i]);
			  moveAt(e);

			  a[i].style.zIndex = 1000; // над другими элементами

			  function moveAt(e) 
			  {
				a[i].style.left = e.pageX - shiftX + 'px';
				a[i].style.top = e.pageY - shiftY + 'px';
			  }

			  document.onmousemove = function(e) 
			  {
				moveAt(e);
			  };

			  a[i].onmouseup = function() 
			  {
				document.onmousemove = null;
				a[i].onmouseup = null;
			  };

			}

			a[i].ondragstart = function() 
			{
			  return false;
			};
		}
	}
	function getCoords(elem) 
	{ // кроме IE8-
	  var box = elem.getBoundingClientRect();

	  return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	  };
	}
	