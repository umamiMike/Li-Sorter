console.log("contentScript has been run");
console.log($('ul', 'ol'));
$('ul, ol, div').each(function(){
    var $this = $(this);
    $this.sortable();
});
