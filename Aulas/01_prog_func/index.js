function generateListener() {
	var listeners = [];
	var observer = {};
	var count = 0;

	observer.addListener = function (wListenner) {
		listeners.push(wListenner);
	}

	observer.exec = function () {
		for (var i = 0; i < listeners.length; i++) {
			console.log(listeners[i]());
		}
		if(listeners.length > 0) count++;
	}

	observer.printCounter = function () {
		if(listeners.length > 0){
			console.log('Executed: ' + count + ((count<=1)? ' time' : ' times'));
		}
	}

	observer.reset = function () {
		listeners = [];
		count = 0;
	}

	return observer;
}

var manage = generateListener();

manage.addListener(function (){
	return 5 + 5;
});

var manage2 = generateListener();

manage2.addListener(function () {
	return 'Hello World!'
});

var manage3 = generateListener();

manage3.addListener(function () {
	return 'Programação funcional é legal!'
});

manage.exec();
manage.printCounter();

manage2.exec();
manage2.exec();
manage2.printCounter();

manage3.exec();
manage3.exec();
manage3.exec();
manage3.printCounter();