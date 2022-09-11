
$('#target').click(function() {
    $(['#output-3','#output-2','#output']).html(function(i, val) { return val*1+1 });
});
