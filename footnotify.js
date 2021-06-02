var app = angular.module("app", ['jtt_footballdata']);
app.controller('controller', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

    var apiKey = '7e77568cd77649b9bcc5327efc3a4700';
 
	footballdataFactory.getLeagueTableBySeason({ 
	id: '426', 
	matchday: '', // (optional) The current/last matchday is taken per default 
	protocol: 'http', // (optional) 'http', 'https', 'auto' 
	apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
	}).then(function (_data) { 
		$scope.standings=_data["data"]["standing"];
		//console.info($scope.standings);
	//on success 
	}).catch(function (_data) { 
	//on error 
	console.info("unable to show data");
	});

}]);

app.controller('controller2', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getFixtures({ 
timeFrame: 'n7', // (optional) The value of the timeFrame argument must start with either 'p' for past or 'n' for next. It is followed by a number in the range 1-99. 
league: 'PL', // (optional) A (list of, comma separated) league-code(s). Default is unset. Get all league codes at http://api.football-data.org/docs/latest/index.html 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) {
$scope.lfixtures=_data["data"]["fixtures"];
console.info($scope.lfixtures); 
//on success 
}).catch(function (_data) { 
//on error 
});

}]);

app.controller('controller3', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getFixtures({ 
timeFrame: 'p7', // (optional) The value of the timeFrame argument must start with either 'p' for past or 'n' for next. It is followed by a number in the range 1-99. 
league: 'PL', // (optional) A (list of, comma separated) league-code(s). Default is unset. Get all league codes at http://api.football-data.org/docs/latest/index.html 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) {
$scope.results=_data["data"]["fixtures"];
console.info($scope.results); 
//on success 
}).catch(function (_data) { 
//on error 
});

}]);

app.controller('controller4', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getPlayersByTeam({ 
id: '66', 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) { 
	$scope.squad=_data["data"]["players"];
	console.info($scope.squad);
//on success 
}).catch(function (_data) { 
//on error 
});

}]);

app.controller('controller5', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getTeam({ 
id: '66', 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) { 
	$scope.manu=_data["data"];
	console.info($scope.manu);
//on success 
}).catch(function (_data) { 
//on error 
}); 

}]);

app.controller('controller6', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getFixturesByTeam({ 
id: '66', 
season: '', // (optional) Defaults to the current year, given as 4 digit like '2015' 
timeFrame: 'p21', // (optional) The value of the timeFrame argument must start with either 'p' for past or 'n' for next. It is followed by a number in the range 1-99. 
venue: '', // (optional) Valid values: `home` and `away`. Default is unset. 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) { 
	$scope.mresults=_data["data"]["fixtures"];
	console.info($scope.mresults);
//on success 
}).catch(function (_data) { 
//on error 
});

}]);


app.controller('controller7', ['$scope', 'footballdataFactory', function($scope, footballdataFactory) {

footballdataFactory.getFixturesByTeam({ 
id: '66', 
season: '', // (optional) Defaults to the current year, given as 4 digit like '2015' 
timeFrame: 'n21', // (optional) The value of the timeFrame argument must start with either 'p' for past or 'n' for next. It is followed by a number in the range 1-99. 
venue: '', // (optional) Valid values: `home` and `away`. Default is unset. 
protocol: 'http', // (optional) 'http', 'https', 'auto' 
apiKey: '7e77568cd77649b9bcc5327efc3a4700', // Register for a free api key: http://api.football-data.org/register 
}).then(function (_data) { 
	$scope.mfixtures=_data["data"]["fixtures"];
	console.info($scope.mfixtures);
//on success 
}).catch(function (_data) { 
//on error 
});

}]);