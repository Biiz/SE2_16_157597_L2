	//default quantity the item has
	var quantityCount = 8;
	//max quantity of the storage
	var storageSP = 30;
	//var for the table
	var table;
	//var of the item name i want to add
	var orderIT;
	//var of the item quantity i want to add
	var orderQT;
	//liste per iterare meglio all'interno
	var in_cart_item = ["banana", "apple"];
	var in_cart_quantity = [5, 3];
  
  
/**
 * @brief function that show the row about the new order of an item
 */
	function showOrderItem(){
		hideUpdateStorage();
		document.getElementById("ROW_order_item").style.display = 'block';
		alertQuantity();
	}
  
/**
 * @brief function that hide the row about the new order of an item
 */
	function hideOrderItem(){
		document.getElementById("ROW_order_item").style.display = 'none';
	}
  
/**
 * @brief function that show the row about the update of the storage quantity
 */
	function showUpdateStorage(){
		hideOrderItem();
		document.getElementById("ROW_update_storage").style.display = 'block';
		alertQuantity();
	}
  
/**
 * @brief function that hide the row about the update of the storage quantity
 */
	function hideUpdateStorage(){
		document.getElementById("ROW_update_storage").style.display = 'none';
	}
  
/**
 * @brief function that check if the quantity of stored item is greater than the actual space and send an alert if so
 */
	function alertQuantity(){
		if(parseInt(quantityCount) > parseInt(storageSP)){
			alert("reached max storage!");
		}
	}


/**
 * @brief Function that update the storage quantity, invoked after the user has pressed the button "update"
 */
	function updateQuantity(){
		//check the storage and the total quantity
		quantityCount += parseInt(orderQT);
		
		alertQuantity();

		document.getElementById("storageQT").innerHTML = parseInt(quantityCount);
	}

/**
 * @brief function that clear the text-input inside a form
 */
	function clearInput(){
		document.getElementById("inputForm").reset();
	}

/**
 * @brief function that push the new element in the list
 */
	function aggiornaListe(){
		in_cart_item.push(orderIT);
		in_cart_quantity.push(orderQT);
	}
	
/**
 * @brief Function that insert two values in a new row af a table
 */
	function addRow(){
		// Create an empty <tr> element and add it to the last position of the table:
		var row = table.insertRow(-1);

		// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
		var cell1 = row.insertCell(0);
    	var cell2 = row.insertCell(1);

		// Add the value to the new cells:
		cell1.innerHTML = orderIT;
		cell2.innerHTML = parseInt(orderQT);
	}

/**
 * @brief function that update the storage quantity getting the value from the text field
 */
	function updateStorage(){
		storageSP = document.getElementById("storageSpace").value;
		alertQuantity();
	}

/**
 * @brief Function that insert the item and the quantity from the text input in the table
 */
	function orderItem() {

		//get the table
		table = document.getElementById("itemTable");

		//get the element i want to add in the table 
		orderIT = document.getElementById("item_name").value;
		orderQT = document.getElementById("item_quantity").value;
		
		//controllo che entrambi i campi non siano vuoti
		if(orderIT != '' && orderQT != ''){

			//controllo se l'oggetto è già presente
			if(in_cart_item.indexOf(orderIT) > -1){
				//lo cerco
				for(var i=0; i< in_cart_item.length; i++){
					//quando trovo la posizione ne aggiorno il prezzo nella lista e nella tabella
					if(in_cart_item[i] == orderIT.toString()){
						in_cart_quantity[i] = parseInt(in_cart_quantity[i]) + parseInt(orderQT);
						//table.rows[i+1].cells[1].innerHTML = parseInt(in_cart_quantity[i]);
						document.getElementById("itemTable").rows[i+1].cells[1].innerHTML = parseInt(in_cart_quantity[i]);
						updateQuantity();
						clearInput();
					}
				}
			}
			//altrimenti inserisco il nuovo item
			else{
				aggiornaListe();
				addRow();
				updateQuantity();
				clearInput();
			}	
		}
		else{
			alert("input non validi");
			alertQuantity();

			
		}
	}
