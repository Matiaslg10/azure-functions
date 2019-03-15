module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name && req.query.number)
	{	
		var base = req.query.number;
		var data = "\n";
		for (var i = 1; i <= 10; i++) {
                data += base + " X " + i + " = " +(i*base)+"\n";
		}
		
        context.res = {
            // status: 200, /* Defaults to 200 */
			body: "Hello and Welcome " + (req.query.name || req.body.name) + data
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};