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
