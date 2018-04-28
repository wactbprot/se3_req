// http://localhost:5984/vl_db/_design/se3_req/_list/report/state
function(head, req) {

    var mustache = require("lib/mustache"),
	head = this.templates.head,
	entry = this.templates.entry,
	foot = this.templates.foot;

    start({
        headers: {
    	"Content-type": "text/html",
            "charset":"utf-8"
        }
    });
    while(r = getRow()) {
        doc = r.value;
    }
    if(doc && doc.State && doc.State.Check){
        var values = doc.State.Check.Values;
        send(mustache.to_html(head, doc));

        for(quant in values){
            send(mustache.to_html(entry, {"Quant":quant, "Values":values[quant]}));
        }
        send(mustache.to_html(foot, doc));
    }
}
