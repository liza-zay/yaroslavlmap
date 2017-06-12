function legend_work (objName) {
	if (objName == '.food') {
		$('.fun, .sight').hide('slow');
		$('.food').show('slow');
	} else {
		if (objName == '.fun') {
			$('.food, .sight').hide('slow');
			$('.fun').show('slow');
		} else{
			if (objName == '.sight') {
				$('.food, .fun').hide('slow');
				$('.sight').show('slow');
			}
		}
	}
}